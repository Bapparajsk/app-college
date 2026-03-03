import { ClassProgress, Departments, Library, Service, UserProgress } from '@/components/home';

import { View } from 'react-native';
import Layout from '../template';

export default function index() {
    return (
        <Layout>
            <UserProgress />
            <ClassProgress />
            <Library />
            <Departments />
            <Service />
            <View className="h-30" />
        </Layout>
    )
}