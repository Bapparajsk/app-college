import { Avatar } from "heroui-native";
import { Pressable, Text, View } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from "react-native-reanimated";

export type UserProps = {
    name: string;
    role: string;
    avatarUrl?: string;
    onPress?: () => void;
    withOpacity?: boolean; // optional control
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const User = ({
    name,
    role,
    avatarUrl,
    onPress,
    withOpacity = false,
}: UserProps) => {

    const scale = useSharedValue(1);
    const opacity = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
            opacity: opacity.value,
        };
    });

    const handlePressIn = () => {
        scale.value = withSpring(0.96, {
            damping: 15,
            stiffness: 200,
        });

        if (withOpacity) {
            opacity.value = withTiming(0.7, { duration: 150 });
        }
    };

    const handlePressOut = () => {
        scale.value = withSpring(1);

        if (withOpacity) {
            opacity.value = withTiming(1, { duration: 150 });
        }
    };

    return (
        <AnimatedPressable
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={animatedStyle}
        >
            <View className="w-full flex-row gap-2">
                <Avatar alt="user" size="lg">
                    <Avatar.Image
                        source={{ uri: avatarUrl }}
                        animation={{
                            opacity: {
                                value: [0.3, 1],
                                timingConfig: { duration: 300 },
                            },
                        }}
                    />
                    <Avatar.Fallback>
                        <Text className="text-2xl font-poppins-semibold text-blue-500">
                            {name.substring(0, 2).toUpperCase()}
                        </Text>
                    </Avatar.Fallback>
                </Avatar>

                <View className="justify-center">
                    <Text className="text-2xl font-poppins-semibold">
                        {name}
                    </Text>
                    <Text
                        className="text-base font-poppins-medium"
                        style={{ color: "#4a5565" }}
                    >
                        {role}
                    </Text>
                </View>
            </View>
        </AnimatedPressable>
    );
};

export default User;
