import { RoutingDetails } from '@/constants/routing/classDetails'
import { getGradientColors } from '@/utils/color'
import { formatHourTo12 } from '@/utils/date'
import { Feather, FontAwesome6 } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { Chip, PressableFeedback, Surface } from 'heroui-native'
import { Text, View } from 'react-native'

export default function RoutingCard(props: RoutingDetails) {
    const { subject, classType, classTypeIcon: ClassTypeIcon, room, icon: Icon, time, color } = props;

    return (
        <PressableFeedback>
            <PressableFeedback.Ripple
                animation={{
                    backgroundColor: { value: 'black' },
                    opacity: { value: [0, 0.3, 0] },
                }}
            />
            <Surface variant='default' className='mb-3 w-full h-24 flex-row overflow-hidden p-0 px-2 rounded-full'>

                <View className='w-full h-full flex-row items-center justify-between'>
                    <View className='flex-row gap-2'>
                        <View className='size-20'>
                            <View style={{ backgroundColor: `${color}30`, borderColor: `${color}60` }} className='size-full rounded-full border items-center justify-center'>
                                <LinearGradient
                                    colors={getGradientColors(color || "#000000") as any}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    className='size-full items-center justify-center'
                                    style={{ borderRadius: 9999 }}
                                >
                                    <Icon color={color} size={30} />
                                </LinearGradient>
                            </View>
                        </View>
                        <View className='w-auto justify-center'>
                            <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 18, color: "#111111" }}>
                                {subject}
                            </Text>
                            <Chip variant='soft' className='border border-border'>
                                <FontAwesome6 name="clock" size={12} color="#71717a" />
                                <Text
                                    style={{ fontFamily: "PoppinsRegular", fontSize: 12, color: "#71717a", lineHeight: 18 }}
                                >
                                    {formatHourTo12(time.start)} - {formatHourTo12(time.end)}
                                </Text>
                            </Chip>
                            <View style={{ marginTop: 4, gap: 8 }} className='flex-row'>

                                <Chip
                                    variant='secondary'
                                    className='border border-border'
                                >
                                    <ClassTypeIcon size={12} color="#71717a" />
                                    <Text style={{ fontFamily: "PoppinsRegular", fontSize: 12, color: "#71717a", lineHeight: 18 }}>
                                        {classType}
                                    </Text>
                                </Chip>
                                <Chip
                                    variant='secondary' className='border border-border'
                                >
                                    <Feather name="home" size={12} color="#71717a" />
                                    <Text style={{ fontFamily: "PoppinsRegular", fontSize: 12, color: "#71717a", lineHeight: 18 }}>
                                        {`Room: ${room}`}
                                    </Text>
                                </Chip>
                            </View>
                        </View>
                    </View>
                </View>
            </Surface>
        </PressableFeedback>
    );
}