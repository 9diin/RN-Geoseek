import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Slot } from "expo-router";
import { KeyboardAvoidingView, Platform, SafeAreaView } from "react-native";
import "./global.css";

const appTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#121212",
        background: "#f9f9f9",
    },
};

export default function RootLayout() {
    return (
        <ThemeProvider value={appTheme}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                <SafeAreaView className="w-full h-full">
                    <Slot />
                </SafeAreaView>
            </KeyboardAvoidingView>
        </ThemeProvider>
    );
}
