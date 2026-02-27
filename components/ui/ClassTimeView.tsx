import { Feather } from "@expo/vector-icons";
import { Surface } from "heroui-native";
import { Text, View } from "react-native";

export type ClassTimeViewProps = {
    time: string;
    color?: `#${string}`;
    secondaryColor?: `#${string}`;
}

const ClassTimeView = ({ time, color, secondaryColor }: ClassTimeViewProps) => {
    return (
        <Surface
            style={{
                backgroundColor: color ?? "#A5F1E9",
                width: 160,
                height: 50,
                borderRadius: 999999,
                marginTop: 10,
                padding: 2.5,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <View
                style={{
                    aspectRatio: 1,
                    backgroundColor: secondaryColor ?? "#ffffff",
                    height: 45,
                    borderRadius: 999,
                }}
            >
                <Feather
                    name="check"
                    size={24}
                    style={{ alignSelf: "center", marginTop: 10 }}
                />
            </View>

            <Text
                style={{
                    fontSize: 16,
                    fontFamily: "PoppinsSemiBold",
                    marginHorizontal: 10,
                }}
            >
                {time}
            </Text>
        </Surface>
    )
};

export default ClassTimeView