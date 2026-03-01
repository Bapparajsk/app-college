import { Header } from '@/components/header';
import { ClassProgress, Departments, Library, Service, UserProgress } from '@/components/home';

import { LinearGradient } from "expo-linear-gradient";
import { ScrollShadow } from 'heroui-native';
import { ScrollView, View } from 'react-native';

const breakdownData = [
    { label: 'Monitor', value: 1341, color: '#3b82f6' },   // blue-500
    { label: 'Laptop', value: 217, color: '#22c55e' },     // green-500
    { label: 'Mobile', value: 124, color: '#f97316' },     // orange-500
    { label: 'Tablet', value: 53, color: '#a855f7' },      // purple-500
];

export default function index() {
    return (
        <ScrollShadow LinearGradientComponent={LinearGradient}>
            <ScrollView className='p-2' showsVerticalScrollIndicator={false}>
                <Header />
                <UserProgress />
                
                <ClassProgress />
                <Library />
                <Departments />
                <Service />
                <View className="h-30" />
            </ScrollView>
        </ScrollShadow>
    )
}