import { Header } from "@/components/header";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollShadow } from "heroui-native";
import React from "react";
import { ScrollView } from "react-native";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ScrollShadow LinearGradientComponent={LinearGradient}>
            <ScrollView className='p-2' showsVerticalScrollIndicator={false}>
                <Header />
                {children}
            </ScrollView>
        </ScrollShadow>
    );
}
