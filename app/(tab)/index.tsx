import { Header } from '@/components/header';
import { UserProgress } from '@/components/home';
import { LinearGradient } from "expo-linear-gradient";
import { View } from 'react-native';

export default function index() {
    return ( 
        <LinearGradient
            colors={['#effaff', '#f4fbff', '#f9fcff', '#fdfdff', '#ffffff']}
            className="flex-1"
        >
            <Header/>
            <View className='p-2'>
                <UserProgress/>
            </View>
        </LinearGradient>
    )
}