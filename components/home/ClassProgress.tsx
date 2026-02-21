import { Feather, Ionicons } from "@expo/vector-icons";
import { Card } from "heroui-native/card";
import { Chip } from "heroui-native/chip";
import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
    Extrapolation,
    SharedValue,
    interpolate,
    useAnimatedReaction,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withSpring,
    withTiming
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

const { width } = Dimensions.get("window");
const THRESHOLD = width * 0.5;

const AnimatedCard = Animated.createAnimatedComponent(Card);

const ClassCard = ({
    activeIndex,
    index,
    onSwipe,
    swipeProgress,           // <-- new prop
}: {
    activeIndex: SharedValue<number>;
    index: number;
    onSwipe: () => void;
    swipeProgress: SharedValue<number>;
}) => {
    const translateX = useSharedValue(0);

    // ✅ reactive active state
    const isActive = useDerivedValue(() => {
        return activeIndex.value === index;
    });

    // ✅ Reset translation when card becomes inactive
    useAnimatedReaction(
        () => isActive.value,
        (isActiveNow, prevIsActive) => {
            if (!isActiveNow && prevIsActive) {
                translateX.value = 0;
            }
        }
    );

    // ✅ Update global swipe progress when this card is active and its translation changes
    useAnimatedReaction(
        () => ({ translate: translateX.value, active: isActive.value }),
        ({ translate, active }) => {
            if (active) {
                // progress from 0 to 1 based on how far the card has moved (absolute)
                const progress = Math.min(Math.abs(translate) / width, 1);
                swipeProgress.value = progress;
            }
        },
        [translateX, isActive, swipeProgress]
    );

    const panGesture = Gesture.Pan()
        .onUpdate((e) => {
            if (isActive.value) {
                if (index === 0) {
                    translateX.value = e.translationX < 0 ? e.translationX : 0; // Allow left only
                } else {
                    translateX.value = e.translationX > 0 ? e.translationX : 0; // Allow right only
                }
            }
        })
        .onEnd(() => {
            if (!isActive.value) return;

            if (Math.abs(translateX.value) > THRESHOLD) {
                const direction = translateX.value > 0 ? 1 : -1;
                translateX.value = withTiming(direction * width, { duration: 250 }, () => {
                    scheduleOnRN(onSwipe); // triggers activeIndex change
                });
            } else {
                translateX.value = withSpring(0);
            }
        });

    const animatedStyle = useAnimatedStyle(() => {
        const active = isActive.value;

        // Scale logic: active card always ends at 1, inactive scales with swipe progress
        let scaleValue;
        if (active) {
            scaleValue = withTiming(1, { duration: 200 });
        } else {
            // Interpolate from 0.93 to 1 based on swipe progress (0 → 1)
            scaleValue = interpolate(
                swipeProgress.value,
                [0, 1],
                [0.93, 1],
                Extrapolation.CLAMP
            );
        }

        return {
            transform: [
                { translateX: active ? translateX.value : 0 },
                { scale: scaleValue },
            ],
            // opacity: withTiming(active ? 1 : 0.8, { duration: 200 }),
            zIndex: active ? 10 : 0,
        };
    });

    return (
        <GestureDetector gesture={panGesture}>
            <AnimatedCard
                style={[
                    {
                        position: "absolute",
                        width: width * 0.9,
                        alignSelf: index === 0 ? "flex-start" : "flex-end",
                    },
                    animatedStyle,
                ]}
            >
                <Card.Header>
                    <View className="flex-row gap-1 items-center">
                        <View
                            className="size-1 rounded-full"
                            style={{ backgroundColor: "#05df72" }}
                        />
                        <Text
                            style={{
                                color: "#6a7282",
                                fontFamily: "PoppinsMedium",
                                marginHorizontal: 3,
                            }}
                        >
                            Live
                        </Text>
                    </View>
                </Card.Header>

                <Card.Body>
                    <View className="flex-row items-start justify-between">
                        <View>
                            <Text
                                style={{
                                    fontFamily: "PoppinsSemiBold",
                                    fontSize: 24,
                                }}
                            >
                                {index === 0 ? "Applied Physics" : "Mathematics"}
                            </Text>

                            <Text
                                style={{
                                    fontFamily: "PoppinsMedium",
                                    color: "#6a7282",
                                    fontSize: 16,
                                }}
                            >
                                {index === 0 ? "Sujit Pathak" : "Ankit Sharma"}
                            </Text>

                            <View
                                style={{
                                    backgroundColor: "#A5F1E9",
                                    width: 160,
                                    height: 50,
                                    borderRadius: 999,
                                    marginTop: 10,
                                    padding: 2.5,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <View
                                    style={{
                                        aspectRatio: 1,
                                        backgroundColor: "#ffffff",
                                        height: 45,
                                        borderRadius: 999,
                                    }}
                                >
                                    <Feather
                                        name="check"
                                        size={24}
                                        style={{ alignSelf: "center", marginTop: 10 }}
                                    />
                                </View>

                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontFamily: "PoppinsSemiBold",
                                        marginHorizontal: 10,
                                    }}
                                >
                                    11AM - 12PM
                                </Text>
                            </View>

                            <View className="mt-2 flex-row gap-2">
                                <Chip variant="secondary">
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

                                <Chip variant="secondary">
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

                        <View className="w-auto h-full justify-end">
                            <Image
                                source={{
                                    uri: "https://thumbs.dreamstime.com/b/physics-icon-set-subjects-designating-school-discipline-183359224.jpg?w=360",
                                }}
                                style={{ width: 120, height: 120, marginBottom: 10 }}
                            />
                        </View>
                    </View>
                </Card.Body>
            </AnimatedCard>
        </GestureDetector>
    );
};

export default function ClassProgress() {
    const activeIndex = useSharedValue(0);
    const swipeProgress = useSharedValue(0);   // <-- new shared value

    const toggleCard = () => {
        activeIndex.value = activeIndex.value === 0 ? 1 : 0;
    };

    return (
        <View style={{ height: 230, justifyContent: "center" }}>
            <ClassCard
                index={0}
                activeIndex={activeIndex}
                onSwipe={toggleCard}
                swipeProgress={swipeProgress}
            />
            <ClassCard
                index={1}
                activeIndex={activeIndex}
                onSwipe={toggleCard}
                swipeProgress={swipeProgress}
            />
        </View>
    );
}