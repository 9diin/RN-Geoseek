import { Tabs } from "expo-router";
import { MapPinned, Search } from "lucide-react-native";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    height: 40, // 기본은 80~90일 수 있음, 이 값을 줄이세요
                    paddingBottom: 4, // 아이콘이 아래로 너무 치우치지 않도록
                    paddingTop: 4,
                },
                tabBarLabelStyle: {
                    marginTop: 2,
                },
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tabs.Screen name="index" options={{ title: "검색", headerShown: false, tabBarIcon: ({ color }) => <Search size={20} color={color} /> }} />
            <Tabs.Screen name="search" options={{ title: "지도", headerShown: false, tabBarIcon: ({ color }) => <MapPinned size={20} color={color} /> }} />
        </Tabs>
    );
}
