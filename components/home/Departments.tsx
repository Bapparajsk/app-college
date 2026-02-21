import { Feather } from "@expo/vector-icons";
import { Surface } from "heroui-native";
import { Text, View } from "react-native";

const Departments = () => {
    return (
        <View className="mt-2">
            <View className="flex-row gap-1 items-center">
                <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 24 }}>
                    Departments
                </Text>
                <Feather name="layout" size={20} color="black" />
            </View>
            <Surface>

            </Surface>
        </View>
    );
};

export default Departments;