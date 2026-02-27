import { Text } from "react-native";
import { Header } from "../header";

const RoutingHeader = () => {
    return (
        <Header
            customLeftComponent={
                <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 26, }} className="ml-1 py-3">
                    Today&apos;s Class
                </Text>
            }
        />
    );
};

export default RoutingHeader;