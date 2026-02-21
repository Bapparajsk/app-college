import { Header } from '@/components/header';
import { ClassProgress, Departments, Library, UserProgress } from '@/components/home';
import { LinearGradient } from "expo-linear-gradient";
import { ScrollShadow } from 'heroui-native';
import { ScrollView } from 'react-native';

export default function index() {
    return (
        <LinearGradient
            colors={['#effaff', '#f4fbff', '#f9fcff', '#fdfdff', '#ffffff']}
            className="flex-1"
        >
            <ScrollShadow LinearGradientComponent={LinearGradient}>
                <ScrollView className='p-2' >
                    <Header />
                    <UserProgress />
                    <ClassProgress />
                    <Library/>
                    <Departments/>
                </ScrollView>
            </ScrollShadow>
        </LinearGradient>
    )
}