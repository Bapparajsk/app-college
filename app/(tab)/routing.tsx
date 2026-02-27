import { RoutingHeader, TeacherSeason } from '@/components/routing'
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollShadow } from 'heroui-native'
import React from 'react'
import { ScrollView, View } from 'react-native'

export default function routing() {
    return (
        <ScrollShadow LinearGradientComponent={LinearGradient}>
            <ScrollView className='p-2' showsVerticalScrollIndicator={false}>
                <RoutingHeader />
                <TeacherSeason />
                
                <View className="h-30" />
            </ScrollView>
        </ScrollShadow>
    )
}