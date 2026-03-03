import CommunityCard from '@/components/community/CommunityCard'
import { FlashList } from '@shopify/flash-list'
import { PressableFeedback, Surface } from 'heroui-native'
import { SendIcon } from 'lucide-react-native'
import React from 'react'
import { Text, TextInput, View } from 'react-native'
import Layout from '../template'

export const communityTestData = [
    "Share Your Idea with the Community!",
    "Looking for Study Partners?",
    "Join Our Upcoming Hackathon!",
    "Tips for Effective Time Management",
    "Exploring New Tech Trends in 2024",
    "How to Build a Strong Portfolio",
    "Networking Strategies for Students",
    "Balancing Academics and Extracurriculars",
    "Top Resources for Learning Programming",
    "Career Advice from Industry Experts"
]

export default function community() {
    return (
        <Layout>
            <View className="w-full h-auto mt-4 max-w-[90%] px-2">
                <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 34, lineHeight: 42 }}>
                    {communityTestData[Math.floor(Math.random() * communityTestData.length)]} 🚀
                </Text>
            </View>
            <View className="w-full h-auto mt-6">
                <Surface variant='tertiary' className="w-full h-14 flex-row p-1 rounded-full items-center justify-between gap-1">
                    <View className="grow h-auto flex-1">
                        <TextInput
                            editable
                            multiline
                            numberOfLines={4}
                            maxLength={100}
                            placeholder="Write here..."
                            className="grow h-auto px-4 py-2 text-base font-inter-medium"
                        />
                    </View>
                    <PressableFeedback>
                        <View className="h-full w-auto px-3 bg-black rounded-full flex-row items-center justify-center gap-2">
                            <SendIcon color="white" size={20} />
                            <Text className="text-white font-poppins-medium">Post now</Text>
                        </View>
                    </PressableFeedback>
                </Surface>
            </View>
            <FlashList
                data={[11, 2, 3, 4, 5, 6, 7, 8, 9]}
                renderItem={() => <CommunityCard />}
                contentContainerStyle={{ paddingTop: 30, paddingBottom: 100 }}
            />
        </Layout>
    )
}