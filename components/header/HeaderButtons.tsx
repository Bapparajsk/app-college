import { Ionicons } from "@expo/vector-icons";
import { Button } from "heroui-native";
import { View } from "react-native";

const HeaderButtons = () => {
    return (
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
    );
}

export default HeaderButtons;