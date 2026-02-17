import FontProvider from "@/providers/font";
import { Stack } from "expo-router";
import { HeroUINativeProvider } from 'heroui-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import './global.css';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FontProvider>
        <HeroUINativeProvider config={{ devInfo: { stylingPrinciples: false } }}>
          <Stack>
            <Stack.Screen name="(tab)" options={{ headerShown: false }} />
          </Stack>
        </HeroUINativeProvider>
      </FontProvider>
    </GestureHandlerRootView>
  );
}
