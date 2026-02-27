import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { Chip, Surface } from 'heroui-native'
import React from 'react'
import { Text, View } from 'react-native'
import ClassTimeView from '../ui/ClassTimeView'
import User from '../ui/User'

export default function TeacherSeason() {
    return (
        <Surface className='p-0'>
            <LinearGradient
                colors={["#a5d7cf", "#abd8c4", "#b6d8b8", "#c5d6ae", "#d5d3a6"]}
                className='p-2 pb-4'
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <ClassTimeView
                    time='2 PM - 3 PM'
                    color='#FFF0DD'
                    secondaryColor='#a5d7cf'
                />

                <View className='mt-4'>
                    <View className='justify-start items-start'>
                        <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 26, color: "#000000", lineHeight: 34 }}>
                            MATH-II
                        </Text>
                        <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 18, color: "#595757", lineHeight: 24 }}>
                            Mathematics
                        </Text>
                    </View>
                    <View className='flex-row justify-start items-center'>
                        <View className="mt-2 flex-row gap-2">
                            <Chip variant="tertiary" className='border border-border'>
                                <Ionicons name="calendar-outline" size={14} />
                                <Chip.Label
                                    style={{
                                        fontSize: 12,
                                        fontFamily: "PoppinsMedium",
                                        color: "#6a7282",
                                    }}
                                >
                                    12th Jan
                                </Chip.Label>
                            </Chip>

                            <Chip variant="tertiary" className='border border-border'>
                                <Ionicons name="home-outline" size={14} />
                                <Chip.Label
                                    style={{
                                        fontSize: 12,
                                        fontFamily: "PoppinsMedium",
                                        color: "#6a7282",
                                    }}
                                >
                                    A-3
                                </Chip.Label>
                            </Chip>
                        </View>
                    </View>
                    <View className='mt-2'>
                        <User
                            avatarProps={{
                                name: "sujit pathak",
                                userRole: "professor",
                                avatarUrl: "https://example.com/avatar.jpg",
                                alt: "sujit pathak",
                                size: "md",
                                nameStyle: { fontSize: 16, lineHeight: 24 },
                                roleStyle: { fontSize: 12, lineHeight: 20 },
                            }}
                        />
                    </View>
                </View>
            </LinearGradient>
        </Surface>
    )
}