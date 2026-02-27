import { Button, Card, PressableFeedback, Surface } from 'heroui-native';
import { Share2Icon, ThumbsUpIcon, UsersRoundIcon } from 'lucide-react-native';
import React from 'react';
import { Image, Text, View } from 'react-native';

export default function CommunityCard() {

    return (
        <Card className="mb-2">
            <Card.Header>
                <View className="w-full h-16 flex-row items-center justify-between">
                    <View className="w-auto h-full flex-row items-center gap-3">
                        <View className="size-16">
                            <View className="size-full rounded-full bg-gray-200 p-1.5">
                                <Image
                                    source={{ uri: "https://cdn.pixabay.com/photo/2023/01/28/20/23/ai-generated-7751688_640.jpg" }}
                                    className="size-full object-cover rounded-full"
                                />
                            </View>
                        </View>
                        <View className="justify-center">
                            <Text className="text-lg font-poppins-semibold">
                                Jane
                            </Text>
                            <Text className="text-sm font-poppins text-gray-500">
                                2 hours ago
                            </Text>
                        </View>
                    </View>
                    <PressableFeedback>
                        <View className="py-3 px-4 bg bg-gray-200 rounded-full flex-row justify-center items-center gap-1">
                            <UsersRoundIcon size={15} color={"#6b7280"} strokeWidth={3} />
                            <Text className="font-poppins-medium text-gray-500 leading-none">
                                24
                            </Text>
                        </View>
                    </PressableFeedback>
                </View>
            </Card.Header>
            <Card.Body>
                <View className="w-full h-auto py-5">
                    <Text className="font-inter-medium text-lg leading-relaxed">
                        <Text style={{ fontFamily: "PoppinsSemiBold", color: "#10b981" }} className="uppercase">
                            today update: {" "}
                        </Text>
                        Just tried out this amazing new app that helps you connect with like-minded individuals in your area! The community features are fantastic, and I&apos;ve already met so many interesting people. Highly recommend giving it a go!
                    </Text>
                </View>
            </Card.Body>
            <Card.Footer>
                <View className="w-full h-14 flex-row items-center justify-between">
                    <PressableFeedback className="grow">
                        <Surface variant='tertiary' className="flex-row p-0 rounded-full">
                            <View className="w-auto h-full flex-row items-center">
                                <View className="size-16">
                                    <View className="size-full rounded-full p-2">
                                        <Image
                                            source={{ uri: "https://cdn.pixabay.com/photo/2023/01/28/20/23/ai-generated-7751688_640.jpg" }}
                                            className="size-full object-cover rounded-full"
                                        />
                                    </View>
                                </View>
                                <View className="justify-center">
                                    <Text style={{ fontFamily: "PoppinsSemiBold" }} className="text-base text-gray-600">
                                        Comments here
                                    </Text>
                                </View>
                            </View>
                        </Surface>
                    </PressableFeedback>
                    <Button variant='ghost'>
                        <ThumbsUpIcon size={18} color={"#6b7280"} />
                        <Text style={{ color: "#6b7280", fontFamily: "PoppinsMedium", lineHeight: 18 }} className="text-xl leading-none">
                            39
                        </Text>
                    </Button>
                    <Button variant='ghost' isIconOnly>
                        <Share2Icon size={18} color={"#6b7280"} />
                    </Button>
                </View>
            </Card.Footer>
        </Card>
    )
}