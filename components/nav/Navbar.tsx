import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { NavigationRoute, ParamListBase } from "@react-navigation/native";
import { useEffect, useMemo, useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import Animated, {
  LinearTransition,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

function getIconByRouteName(routeName: string, color: string) {
  switch (routeName) {
    case "index":
      return <Ionicons name="home" size={22} color={color} />;
    case "routing":
      return <Ionicons name="navigate" size={22} color={color} />;
    case "community":
      return <Ionicons name="people" size={22} color={color} />;
    case "setting":
      return <Ionicons name="settings" size={22} color={color} />;
    default:
      return <Ionicons name="home" size={22} color={color} />;
  }
}

const CustomNavBar: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
  const insets = useSafeAreaInsets();
  const position = useSharedValue(0); // left position of indicator
  const indicatorWidth = useSharedValue(0); // width of indicator
  const indicatorHeight = useSharedValue(0); // height of indicator
  const opacity = useSharedValue(0); // opacity of indicator
  const tabMeasurements = useRef<{ x: number; width: number; height: number }[]>([]);

  const activityTabs = useMemo(() => {
    return state.routes.filter((route) => ["index", "routing", "community"].includes(route.name));
  }, [state.routes]);

  const settingTab = useMemo(() => {
    return state.routes.find((route) => route.name === "setting");
  }, [state.routes]);

  const handleTabLayout = (index: number, event: any) => {
    const { x, width, height } = event.nativeEvent.layout;
    tabMeasurements.current[index] = { x, width, height };
    // If this is the initially active tab, set indicator position and size
    if (index === state.index) {
      const activeTab = tabMeasurements.current[state.index];
      if (activeTab) {
        position.value = activeTab.x;
        indicatorWidth.value = activeTab.width;
        indicatorHeight.value = activeTab.height;
      }
    }
  };

  useEffect(() => {
    const activeTab = tabMeasurements.current[state.index];
    if(state.index === 3) {
      opacity.value = withSpring(0);
      return;
    }  

    if (activeTab) {
      position.value = withSpring(activeTab.x);
      indicatorWidth.value = withSpring(activeTab.width);
      indicatorHeight.value = withSpring(activeTab.height);
      opacity.value = withSpring(1); // fade in indicator when active tab is measured
    }

  }, [state.index]);

  const handleTabPress = (route: NavigationRoute<ParamListBase, string>, key: string, isFocused: boolean, index: number) => {
    const event = navigation.emit({
      type: "tabPress",
      target: key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name, route.params);
    }

    const tab = tabMeasurements.current[index];
    if(state.routes[index].name === "setting") {
      opacity.value = withSpring(0); // fade out indicator when setting tab is pressed
      return;
    }
    if (tab) {
      position.value = withSpring(tab.x);
      indicatorWidth.value = withSpring(tab.width);
      indicatorHeight.value = withSpring(tab.height);
    }
  };

  const indicatorStyle = useAnimatedStyle(() => ({
    left: position.value,
    width: indicatorWidth.value,
    height: indicatorHeight.value,
    opacity: opacity.value,
  }));

  return (
    <View
      className="absolute flex-row justify-center items-center w-[80%] self-center"
      style={{ bottom: insets.bottom + 20 }}
    >
      <View
        className="relative flex-row gap-2"
        style={{ paddingHorizontal: 10, paddingVertical: 5, borderRadius: 999, backgroundColor: "#d1d5dc", marginRight: 10 }} // white background for contrast
      >
        {/* Animated background indicator - behind tabs */}
        <Animated.View
          className="absolute rounded-full"
          style={[indicatorStyle, { zIndex: 0, top: 5, backgroundColor: "#000000" }]} // add top margin when indicator is visible
        />
        {/* Tabs - in front of indicator */}
        {activityTabs.map((route, index) => {
          const isFocused = state.index === index;

          return (
            <TabButton
              key={route.key}
              route={route}
              isFocused={isFocused}
              onLayout={(e) => handleTabLayout(index, e)}
              onPress={() => handleTabPress(route, route.key, isFocused, index)}
            />
          );
        })}
      </View>
      {settingTab && (
        <TabButton
          route={settingTab}
          isSettingTab
          isFocused={state.routes[state.index].key === settingTab.key}
          onLayout={(e) => handleTabLayout(state.routes.length - 1, e)} // last index for setting tab
          onPress={() => handleTabPress(settingTab, settingTab.key, state.routes[state.index].key === settingTab.key, state.routes.length - 1)}
        />
      )}
    </View>
  );
};

function TabButton({
  route,
  isFocused,
  onPress,
  onLayout,
  isSettingTab,
}: {
  route: NavigationRoute<ParamListBase, string>;
  isFocused: boolean;
  onPress: () => void;
  onLayout: (event: any) => void;
  isSettingTab?: boolean
}) {

  const activeBackgroundColor = isFocused ? "#000000" : "transparent"; // active tab background color

  return (

    <AnimatedTouchableOpacity
      layout={LinearTransition.springify().mass(0.5)}
      onLayout={onLayout}
      onPress={onPress}
      className="px-5 py-3.5 rounded-full flex-row items-center gap-1"
      style={{ backgroundColor: isSettingTab ? activeBackgroundColor : "transparent", zIndex: 1 }} // ensure above indicator
    >
      {getIconByRouteName(
        route.name,
        isFocused ? "#EFF7F6" : "#000000" // icon color changes for visibility against indicator
      )}
    </AnimatedTouchableOpacity>
  );
}

export default CustomNavBar;