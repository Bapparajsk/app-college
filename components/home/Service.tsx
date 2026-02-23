import { FontAwesome, FontAwesome5, Fontisto, Ionicons } from "@expo/vector-icons";
import { PressableFeedback, Surface } from "heroui-native";
import { Text, View } from "react-native";

const services = [
    { name: "Faculty", icon: <FontAwesome5 name="user-graduate" size={22} color="black" /> },
    { name: "Placement", icon: <Ionicons name="briefcase" size={24} color="black" /> },
    { name: "Laboratory", icon: <Fontisto name="laboratory" size={24} color="black" /> },
    { name: "Canteen", icon: <FontAwesome5 name="utensils" size={24} color="black" /> },
    { name: "Sports", icon: <FontAwesome name="futbol-o" size={24} color="black" /> },
];

const Service = () => {
    return (
        <View className="mt-4">
            <View className="flex-row gap-1 items-center">
                <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 24 }}>
                    Facilities
                </Text>
                <Ionicons name="cog-outline" size={24} color="black" />
            </View>
            <Surface variant="secondary">
                <View className="flex-row flex-wrap justify-between">
                    {services.map((service, index) => (
                        <View key={index} className="items-center">
                            <PressableFeedback className="bg-transparent border border-border rounded-xl py-3 px-5">
                                <PressableFeedback.Ripple
                                    animation={{
                                        backgroundColor: { value: '#ec4899' },
                                        opacity: { value: [0, 0.1, 0] },
                                        progress: { baseDuration: 600 },
                                    }}
                                />
                                {service.icon}
                            </PressableFeedback>
                            <Text style={{ fontFamily: "PoppinsMedium", fontSize: 12, marginTop: 4 }}>
                                {service.name}
                            </Text>
                        </View>
                    ))}
                </View>
            </Surface>
        </View>
    );
};

export default Service;