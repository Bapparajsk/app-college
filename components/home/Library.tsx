import { Entypo, FontAwesome5, FontAwesome6, Fontisto, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, Card } from "heroui-native";
import { Text, View } from "react-native";

const Library = () => {
    return (
        <View className="w-full h-auto flex-row items-center">
            <View style={{ width: "60%" }}>
                <Card variant="secondary">
                    <Card.Header >
                        <View className="flex-row justify-between">
                            <View className="flex-row gap-1 items-center">
                                <Card.Title style={{ fontFamily: "PoppinsSemiBold" }}>
                                    Explore Library
                                </Card.Title>
                                <Ionicons name="library-outline" size={20} color="black" />
                            </View>
                            <Button isIconOnly size="sm" variant="outline">
                                <Ionicons name="search-outline" size={18} color="black" />
                            </Button>
                        </View>
                    </Card.Header>
                    <Card.Body>
                        <View className="w-full h-auto mt-4">
                            <View className="flex-row">
                                <View style={{ alignItems: "flex-end" }} className="flex-row gap-1">
                                    <FontAwesome6 name="book" size={18} color="black" />
                                    <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 25, lineHeight: 20 }}>39,000</Text>
                                    <View style={{ alignItems: "flex-end" }} className="h-full flex-row">
                                        <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 12, color: "#28A745", lineHeight: 14 }}>10%</Text>
                                        <FontAwesome5 name="arrow-up" size={10} color="#28A745" />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Card.Body>
                </Card>
            </View>
            <View style={{ width: "40%", paddingLeft: 5 }} className="h-auto gap-1.5">
                <Button variant="tertiary">
                    <MaterialCommunityIcons name="function-variant" size={20} color="black" />
                    <Button.Label style={{ fontFamily: "PoppinsSemiBold" }}>
                        Mathematics
                    </Button.Label>
                </Button>
                <View className="flex-row gap-1.5">
                    <View className="flex-1">
                        <Button variant="tertiary">
                            <Entypo name="code" size={20} color="black" />
                            <Button.Label style={{ fontFamily: "PoppinsSemiBold" }}>
                                Code
                            </Button.Label>
                        </Button>
                    </View>
                    <Button variant="tertiary" isIconOnly>
                        <Fontisto name="atom" size={20} color="black" />
                    </Button>
                </View>
            </View>
        </View>
    );
};

export default Library;