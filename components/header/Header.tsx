import { View } from "react-native";
import User from "../ui/User";
import HeaderButtons from "./HeaderButtons";

type HeaderProps = {
    customLeftComponent?: React.ReactNode;
    style?: object;
}

const Header = ({ customLeftComponent, style }: HeaderProps) => {
    return (
        <View className="h-32 w-full py-3 px-2" style={style}>
            <View className="w-full h-full flex-row justify-between">
                <View className="justify-end">
                    <View className="w-full flex-row justify-between items-center">
                        {customLeftComponent ? customLeftComponent : (
                            <User
                                avatarProps={{
                                    alt: "user",
                                    name: "John Doe",
                                    userRole: "Admin",
                                    avatarUrl: "https://i.pravatar.cc/300"
                                }}
                            />
                        )}
                        <HeaderButtons />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Header;