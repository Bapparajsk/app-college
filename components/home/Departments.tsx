import { BTechDepartmentsDetails, DiplomaDepartmentsDetails, HealthScienceDepartmentsDetails, ITIDepartmentsDetails } from "@/constants/department";
import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import DepartmentCard from "./DepartmentCard";

const Departments = () => {
    return (
        <View className="mt-2">
            <View className="flex-row gap-1 items-center">
                <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 24 }}>
                    Departments
                </Text>
                <Feather name="layout" size={20} color="black" />
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
                <DepartmentCard
                    title="Health Science & ITI"
                    departments={[...Object.values(HealthScienceDepartmentsDetails), ...Object.values(ITIDepartmentsDetails)]}
                    linearGradientColors={["#ffffff", "#fdfcfe", "#fcf8fc", "#fcf5f9", "#fdf1f4", "#fdf0f2", "#fdeeef", "#fdeded", "#fdeded", "#fdeded", "#fdeded", "#fdeded"]}
                    separator={[1]}
                />
                
            </View>
        </View>
    );
};

export default Departments;