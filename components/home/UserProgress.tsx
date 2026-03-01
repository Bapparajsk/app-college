import { Feather, MaterialIcons } from '@expo/vector-icons';
import { Button, Card, Chip } from 'heroui-native';
// import { PieChart } from 'lucide-react-native';
import { Text, View } from 'react-native';
import { PieChart } from "react-native-gifted-charts";

const GraphWidth = 300;

const pieData = [
    {
        value: 47,
        color: '#009FFF',
        gradientCenterColor: '#006DFF',
        // focused: true,
        label: 'Present',
    },
    { value: 40, color: '#93FCF8', gradientCenterColor: '#3BE9DE', label: 'Late' },
    { value: 16, color: '#BDB2FA', gradientCenterColor: '#8F80F3', label: 'Absent' },
    { value: 3, color: '#FFA5BA', gradientCenterColor: '#FF7F97', label: 'Excused' },
];

const UserProgress = () => {

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
                <Card.Body className="mb-4 flex-row">
                    <View>
                        <PieChart
                            data={pieData}
                            donut
                            showGradient
                            isAnimated
                            ring
                            edgesRadius={0}
                            shadowColor="#000000"
                            radius={90}
                            innerRadius={60}
                            innerCircleColor={'#FFFFFF'}
                            centerLabelComponent={() => {
                                return (
                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                        <Text
                                            style={{ fontSize: 22, fontFamily: 'PoppinsSemiBold', lineHeight: 28, color: '#009FFF' }}>
                                            47%
                                        </Text>
                                        <Text style={{ fontSize: 14, fontFamily: 'PoppinsRegular', lineHeight: 20, color: '#6B7280' }}>
                                            This month
                                        </Text>
                                    </View>
                                );
                            }}
                        />
                    </View>
                    <View className='grow h-auto' style={{ paddingLeft: 20 }}>
                        {pieData.map((item, index) => (
                            <View key={index} className='flex-row items-center justify-between mb-2'>
                                <View className='flex-row items-center gap-2'>
                                    <View style={{ backgroundColor: item.color, width: 12, height: 12, borderRadius: 6 }} />
                                    <Text style={{ fontFamily: 'PoppinsRegular' }}>
                                        {item.label}
                                    </Text>
                                </View>
                                <View className='flex-row items-center gap-2'>
                                    <Text style={{ fontFamily: 'PoppinsSemiBold' }}>
                                        {item.value*2}
                                    </Text>
                                    <Text style={{ fontFamily: 'PoppinsSemiBold' }}>
                                        {item.value}%
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
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