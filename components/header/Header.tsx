import { Ionicons } from "@expo/vector-icons";
import { Button } from "heroui-native";
import { View } from "react-native";
import User from "../ui/User";

const Header = () => {
    return (
        <View className="h-32 w-full py-3 px-2">
            <View className="w-full h-full flex-row justify-between">
                <View className="justify-end">
                    <View className="w-full flex-row justify-between items-center">
                        <User
                            name="John Doe"
                            role="Admin"
                            avatarUrl="https://i.pravatar.cc/300"
                        />
                        <View className="flex-row gap-2">
                            <Button hitSlop={5} variant="outline" size="lg" isIconOnly>
                                <Ionicons
                                    name="notifications-outline"
                                    size={24}
                                    color="#4a5565"
                                />
                            </Button>
                            <Button hitSlop={5} variant="outline" size="lg" isIconOnly>
                                <Ionicons name="chatbubble-outline" size={24} color="#4a5565" />
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Header;