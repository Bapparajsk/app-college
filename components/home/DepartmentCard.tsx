import { DepartmentDetailsType } from "@/constants/department/departments";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Separator, Surface } from "heroui-native";
import { Fragment, useMemo } from "react";
import { Text, View } from "react-native";

export type DepartmentCardProps = {
    title: string;
    departments: DepartmentDetailsType[];
    linearGradientColors: string[];
    separator?: number[]
}

const DepartmentCard = ({ title, departments, linearGradientColors, separator }: DepartmentCardProps) => {

    const separatorIndex = useMemo(() => {
        const set = new Set(separator);
        return set;
    }, [separator]);

    return (
        <Surface variant="secondary" className="p-0">
            <LinearGradient
                className="p-3"
                colors={linearGradientColors as any}
                start={[0, 0]}
                end={[1, 1]}
            >
                <View>
                    <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 18 }}>
                        {title}
                    </Text>
                </View>
                <View className="flex-row flex-wrap justify-start mt-2 gap-1.5">
                    {departments.map((department, index) => {
                        return (
                            <Fragment key={department.name}>
                                <Button key={department.name} variant="outline" className="h-auto py-3">
                                    <View className="gap-1 items-center">
                                        <department.icon.IconProvider name={department.icon.name as any} size={20} color="black" />
                                        <Button.Label>
                                            <Text style={{ fontFamily: "PoppinsMedium", fontSize: 16 }}>
                                                {department.subName}
                                            </Text>
                                        </Button.Label>
                                    </View>
                                </Button>
                                {separatorIndex.has(index) && <Separator orientation="vertical" thickness={1}/>}
                            </Fragment>
                        );
                    })}
                </View>
            </LinearGradient>
        </Surface>
    )
};

export default DepartmentCard;