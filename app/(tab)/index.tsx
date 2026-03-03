import { ClassProgress, Departments, Library, Service, UserProgress } from '@/components/home';
import CustomLayout from '@/components/ui/template';
import { View } from 'react-native';

export default function index() {
    return (
        <CustomLayout>
            <UserProgress />
            <ClassProgress />
            <Library />
            <Departments />
            <Service />
            <View className="h-30" />
        </CustomLayout>
    )
}