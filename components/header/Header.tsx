import { usePathname } from "expo-router";
import { useMemo } from "react";
import { Text, View } from "react-native";
import User from "../ui/User";
import HeaderButtons from "./HeaderButtons";

const Header = () => {

    const pathname = usePathname();

    const GetHeaderTitle = useMemo(() => {
        if (pathname === "/routing") {
            return (
                <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 26, }} className="ml-1 py-3">
                    Today&apos;s Class
                </Text>
            );
        }

        return (
            <User
                avatarProps={{
                    alt: "user",
                    name: "John Doe",
                    userRole: "Admin",
                    avatarUrl: "https://i.pravatar.cc/300"
                }}
            />
        )

    }, [pathname]);

    return (
        <View className="w-full py-3 px-2" style={[{ height: 110 }]}>
            <View className="w-full h-full flex-row justify-between">
                <View className="justify-end">
                    <View className="w-full flex-row justify-between items-center">
                        {GetHeaderTitle}
                        <HeaderButtons />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Header;