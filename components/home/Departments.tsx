import { BTechDepartmentsDetails, DiplomaDepartmentsDetails } from "@/constants/department";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { PressableFeedback } from "heroui-native";
import { Text, View } from "react-native";
import DepartmentCard from "./DepartmentCard";

const Departments = () => {
    return (
        <View className="mt-4">
            <View className="flex-row justify-between items-center">
                <View className="flex-row gap-1 items-center">
                    <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 24 }}>
                        Departments
                    </Text>
                    <Feather name="layout" size={20} color="black" />
                </View>
                <Link href="/" asChild>
                    <PressableFeedback>
                        <Text style={{ fontFamily: "PoppinsMedium", fontSize: 12, color: "#007AFF" }}>
                            View All
                        </Text>
                    </PressableFeedback>
                </Link>
            </View>
            <View className="gap-2">
                <DepartmentCard
                    title="Diploma"
                    departments={Object.values(DiplomaDepartmentsDetails)}
                    linearGradientColors={["#ffffff", "#fefefe", "#fdfcfc", "#fcfafb", "#fbf9f9", "#faf7f6", "#f8f5f4", "#f6f4f1", "#f4f1ed", "#f2efea", "#f1ece6", "#efe9e3"]}
                />
                <DepartmentCard
                    title="B.Tech"
                    departments={Object.values(BTechDepartmentsDetails)}
                    linearGradientColors={["#ffffff", "#fffcff", "#fff9fa", "#fff6f1", "#fff6e9", "#fff6e5", "#fff7e2", "#fff8de", "#fff8de", "#fff8de", "#fff8de", "#fff8de"]}
                />
            </View>
        </View>
    );
};

export default Departments;