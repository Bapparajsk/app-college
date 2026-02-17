import { Feather, MaterialIcons } from '@expo/vector-icons';
import { Button, Card, Chip } from 'heroui-native';
import { useMemo } from 'react';
import { Text, View } from 'react-native';
import { LineChart } from "react-native-gifted-charts/dist/LineChart";

const GraphWidth = 300;

const UserProgress = () => {



    const lineData = [{ value: 100, label: "1" }, { value: 58,  }, { value: 100, label: "3" }, { value: 120, label: "4" }, { value: 150, label: "5" }, { value: 130, label: "6" }, { value: 80, label: "7" }, { value: 100, label: "8" }, { value: 120, label: "9" }, { value: 150, label: "10" }, { value: 130, label: "11" }, { value: 80, label: "12" }, { value: 100, label: "13" }, { value: 120, label: "14" }, { value: 150, label: "15" }, { value: 130, label: "16" }, { value: 80, label: "17" }, { value: 100, label: "18" }, { value: 120, label: "19" }, { value: 150, label: "20" }, { value: 130, label: "21" }, { value: 80, label: "22" }, { value: 100, label: "23" }, { value: 120, label: "24" }, { value: 150, label: "25" }, { value: 130, label: "26" }, { value: 80, label: "27" }, { value: 100, label: "28" }, { value: 120, label: "29" }, { value: 150, label: "30" }];
    const lineData2 = [{ value: 100, label: "1" }, { value: 20, }, { value: 50, label: "3" }, { value: 80, label: "4" }, { value: 120, label: "5" }, { value: 100, label: "6" }, { value: 60, label: "7" }, { value: 80, label: "8" }, { value: 110, label: "9" }, { value: 140, label: "10" }, { value: 120, label: "11" }, { value: 70, label: "12" }, { value: 90, label: "13" }, { value: 110, label: "14" }, { value: 140, label: "15" }, { value: 120, label: "16" }, { value: 70, label: "17" }, { value: 90, label: "18" }, { value: 110, label: "19" }, { value: 140, label: "20" }, { value: 120, label: "21" }, { value: 70, label: "22" }, { value: 90, label: "23" }, { value: 110, label: "24" }, { value: 140, label: "25" }, { value: 120, label: "26" }, { value: 70, label: "27" }, { value: 90, label: "28" }, { value: 110, label: "29" }, { value: 140, label: "30" }];
    const lineData3 = [{ value: 100, label: "1" }, { value: 40, }, { value: 40, label: "3" }, { value: 100, label: "4" }, { value: 130, label: "5" }, { value: 110, label: "6" }, { value: 70, label: "7" }, { value: 90, label: "8" }, { value: 120, label: "9" }, { value: 150, label: "10" }, { value: 130, label: "11" }, { value: 80, label: "12" }, { value: 100, label: "13" }, { value: 120, label: "14" }, { value: 150, label: "15" }, { value: 130, label: "16" }, { value: 80, label: "17" }, { value: 100, label: "18" }, { value: 120, label: "19" }, { value: 150, label: "20" }, { value: 130, label: "21" }, { value: 80, label: "22" }, { value: 100, label: "23" }, { value: 120, label: "24" }, { value: 150, label: "25" }, { value: 130, label: "26" }, { value: 80, label: "27" }, { value: 100, label: "28" }, { value: 120, label: "29" }, { value: 150, label: "30" }];

    const spacing = useMemo(() => {
        const totalSpacing = GraphWidth - 20; // Subtracting padding
        const spacingValue = totalSpacing / (lineData3.length - 1);
        return spacingValue;
    }, [lineData3.length]);

    return (
        <Card >
            <View className="gap-4">
                <Card.Header>
                    <View className='w-full h-auto flex-row justify-between items-center'>
                        <Text style={{ fontFamily: 'PoppinsSemiBold' }} className="text-2xl">
                            Attendance Progress
                        </Text>
                        <Button variant="outline" size="sm" isIconOnly>
                            <MaterialIcons
                                name="sort"
                                size={20}
                                color="black"
                            />
                        </Button>
                    </View>
                </Card.Header>
                <Card.Body className="mb-4">
                    <LineChart
                        curved
                        // rotateLabel
                        isAnimated
                        data={lineData}
                        data2={lineData2}
                        data3={lineData3}
                        height={80}
                        width={300}
                        scrollToEnd
                        maxValue={200}
                        spacing={spacing}
                        initialSpacing={0}
                        color1="skyblue"
                        color2="orange"
                        color3='purple'
                        noOfSections={3}
                        yAxisTextStyle={{
                            fontFamily: 'PoppinsRegular',
                        }}
                        xAxisLabelTextStyle={{
                            fontFamily: 'PoppinsRegular',
                            fontSize: 12,
                        }}
                        xAxisColor="lightgray"
                        yAxisColor={"lightgray"}
                        textColor1="green"
                        hideDataPoints
                        dataPointsColor1="blue"
                        dataPointsColor2="red"
                        dataPointsColor3="purple"
                        startFillColor1="skyblue"
                        startFillColor2="orange"
                        startFillColor3="purple"
                        startOpacity={0.8}
                        endOpacity={0.3}
                    />

                </Card.Body>
                <Card.Footer className="gap-3">
                    <Chip color='danger' variant='soft'>
                        <Text style={{ fontFamily: 'PoppinsRegular' }} className="text-sm">
                            20% decrease from last month
                        </Text>
                        <Feather
                            name="arrow-down-right"
                            size={16}
                            color="black"
                        />
                    </Chip>
                </Card.Footer>
            </View>
        </Card>
    )
};

export default UserProgress;