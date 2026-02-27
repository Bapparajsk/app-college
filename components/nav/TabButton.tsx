import { Feather, Ionicons } from "@expo/vector-icons";
import { NavigationRoute, ParamListBase } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";


const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

export type TabButtonProps = {
    route: NavigationRoute<ParamListBase, string>;
    isFocused: boolean;
    onPress: () => void;
    onLayout: (event: any) => void;
    isSettingTab?: boolean;
}

const TabButton = ({
    route,
    isFocused,
    onPress,
    onLayout,
    isSettingTab,
}: TabButtonProps) => {

    const activeBackgroundColor = isFocused ? "#000000" : "#d1d5dc"; // active tab background color

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

function getIconByRouteName(routeName: string, color: string) {
    switch (routeName) {
        case "index":
            return <Feather name="home" size={22} color={color} />;
        case "routing":
            return <Ionicons name="calendar" size={22} color={color} />;
        case "community":
            return <Ionicons name="people" size={22} color={color} />;
        case "setting":
            return <Ionicons name="settings" size={22} color={color} />;
        default:
            return <Ionicons name="home" size={22} color={color} />;
    }
}

export default TabButton;