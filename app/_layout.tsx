import FontProvider from "@/providers/font";
import { Stack } from "expo-router";
import { HeroUINativeProvider } from 'heroui-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import './global.css';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HeroUINativeProvider config={{ devInfo: { stylingPrinciples: false } }}>
        <FontProvider>
          <Stack>
            <Stack.Screen name="(tab)" options={{ headerShown: false }}/>
          </Stack>
        </FontProvider>
      </HeroUINativeProvider>
    </GestureHandlerRootView>
  );
}
