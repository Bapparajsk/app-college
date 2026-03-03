import { TeacherSeason } from '@/components/routing'
import DayButton from '@/components/routing/DayButton'
import RoutingList from '@/components/routing/RoutingList'
import { DayTypes, getCurrentWeekDays, getDayAndYear, isToday } from '@/utils/date'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { PressableFeedback } from 'heroui-native'
import React, { useCallback, useMemo, useState } from 'react'
import { Text, View } from 'react-native'
import Layout from '../template'

export default function Routing() {

    const [currDay, setCurrDay] = useState<DayTypes | undefined>(undefined);

    const data = useMemo(() => getCurrentWeekDays(), []);
    const toDayAndYear = useMemo(() => getDayAndYear(), []);

    const handleDayPress = useCallback((day: DayTypes) => {
        setCurrDay(day);
    }, []);


    return (
        <Layout>
            <TeacherSeason />
            <View className="w-full h-10 flex-row items-center justify-between my-4">
                <Text className="font-inter-semibold text-2xl">
                    Class Schedule
                </Text>
                <PressableFeedback hitSlop={20} onPress={() => setCurrDay(undefined)}>
                    <View className="px-3 py-2 bg-white rounded-full">
                        <View className="flex-row items-center gap-1">
                            <MaterialCommunityIcons name="calendar-text-outline" size={16} color="black" />
                            <Text style={{ fontFamily: "PoppinsMedium", fontSize: 12, color: "#6a7282", lineHeight: 18 }}>
                                {toDayAndYear.day} {toDayAndYear.year}
                            </Text>
                        </View>
                    </View>
                </PressableFeedback>
            </View>
            {/* <View className='w-full h-20 border'> */}
            <View className="w-full h-[4rem] flex-row items-center justify-between">
                {
                    data.map((item, index) => {
                        const istoday = isToday(item.date);
                        const isSelected = currDay === item.day || (currDay === undefined && istoday);
                        return (
                            <DayButton
                                key={index}
                                item={item}
                                isSelected={isSelected}
                                onPress={handleDayPress}
                                isToday={istoday}
                            />
                        );
                    })
                }
            </View>
            <RoutingList day={currDay} />
            <View className="h-30" />
        </Layout>
    )
}