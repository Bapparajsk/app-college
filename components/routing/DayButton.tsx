import { DayTypes, formatDay } from "@/utils/date";
import { PressableFeedback, Surface } from "heroui-native";
import { memo, useCallback, useMemo } from "react";
import { Text } from "react-native";

interface DayButtonProps {
    item: {
        day: DayTypes;
        date: {
            day: string;
        };
    };
    isSelected: boolean;
    onPress: (day: DayTypes) => void;
    isToday: boolean;
}


const DayButton = memo(function DayButton({
    item,
    isSelected,
    onPress,
    isToday
}: DayButtonProps) {

    const handlePress = useCallback(() => {
        onPress(item.day);
    }, [item.day, onPress]);

    const formattedDay = useMemo(() =>
        formatDay(item.day),
        [item.day]
    );

    const buttonStyle = useMemo(() => {
        if (isSelected) {
            return {
                backgroundColor: "#000000",
                transform: [{ scale: 0.95 }],
            };
        } else if (isToday) {
            return {
                backgroundColor: "#E5E7EB",
            };
        } else {
            return {
                backgroundColor: "#FFFFFF",
            };
        }
    }, [isSelected, isToday]);

    return (
        <PressableFeedback
            onPress={handlePress}
            style={{
                width: 55,
                height: "auto"
            }}
        >
            <Surface
                className="w-full h-full rounded-3xl items-center justify-center p-0"
                style={{
                    ...buttonStyle,
                }}
            >
                <Text
                    className="font-inter-semibold text-sm"
                    style={{ color: isSelected ? "#FFFFFF" : "#000000" }}
                >
                    {formattedDay}
                </Text>
                <Text
                    className="font-inter-semibold text-sm"
                    style={{ color: isSelected ? "#FFFFFF" : "#6B7280" }}
                >
                    {item.date.day}
                </Text>
            </Surface>
        </PressableFeedback>
    );
});

export default DayButton;