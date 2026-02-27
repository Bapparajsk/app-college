import { Avatar, AvatarRootProps, PressableFeedback, PressableFeedbackProps } from "heroui-native";
import { Text, View } from "react-native";

export type UserProps = PressableFeedbackProps & {
    avatarProps?: AvatarRootProps & {
        name: string;
        userRole: string;
        avatarUrl?: string;
        nameStyle?: object;
        roleStyle?: object;
    };
};


const User = (props: UserProps) => {

    const { avatarProps, ...rest } = props;
    const { name, userRole, avatarUrl, nameStyle, roleStyle, ...restavatar } = avatarProps || {};


    return (
        <PressableFeedback {...rest} >
            <View className="w-full flex-row gap-2">
                <Avatar size="lg" alt="user" {...restavatar}>
                    <Avatar.Image
                        source={{ uri: avatarUrl }}
                        animation={{
                            opacity: {
                                value: [0.3, 1],
                                timingConfig: { duration: 300 },
                            },
                        }}
                    />
                    <Avatar.Fallback>
                        <Text
                            className="text-2xl"
                            style={{ fontFamily: "PoppinsSemiBold", color: "#2b7fff"}}
                        >
                            {name?.substring(0, 2).toUpperCase()}
                        </Text>
                    </Avatar.Fallback>
                </Avatar>

                <View className="justify-center">
                    <Text className="text-2xl"
                        style={{ fontFamily: "PoppinsSemiBold", ...nameStyle }}
                    >
                        {name}
                    </Text>
                    <Text
                        className="text-base"
                        style={{ fontFamily: "PoppinsMedium", color: "#4a5565", ...roleStyle }}
                    >
                        {userRole}
                    </Text>
                </View>
            </View>
        </PressableFeedback>
    );
};

export default User;
