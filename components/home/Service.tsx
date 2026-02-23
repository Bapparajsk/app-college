import { FontAwesome, FontAwesome5, Fontisto, Ionicons } from "@expo/vector-icons";
import { Button, Surface } from "heroui-native";
import { Text, View } from "react-native";

const Service = () => {
    return (
        <View className="mt-4">
            <View className="flex-row gap-1 items-center">
                <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 24 }}>
                    Services
                </Text>
                <Ionicons name="cog-outline" size={24} color="black" />
            </View>
            <Surface variant="secondary">
                <View className="flex-row flex-wrap gap-1 items-center justify-start">
                    <Button isIconOnly variant="outline" size="lg">
                        <FontAwesome5 name="user-graduate" size={22} color="black" />
                    </Button>
                    <Button isIconOnly variant="outline" size="lg">
                        <Fontisto name="laboratory" size={24} color="black" />
                    </Button>
                    <Button isIconOnly variant="outline" size="lg">
                        <FontAwesome5 name="utensils" size={24} color="black" />
                    </Button>
                    <Button isIconOnly variant="outline" size="lg">
                        <FontAwesome name="futbol-o" size={24} color="black" />
                    </Button>
                </View>

            </Surface>
        </View>
    );
};

export default Service;