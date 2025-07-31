import { InfoCard } from "@/src/components";
import { useNaverSearch } from "@/src/hooks";
import { useKeywordStore } from "@/src/stores";
import { Search } from "lucide-react-native";
import { useEffect } from "react";
import { ActivityIndicator, FlatList, Pressable, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
    const keyword = useKeywordStore((state) => state.keyword);
    const setKeyword = useKeywordStore((state) => state.setKeyword);
    const { data, loading, fetchData } = useNaverSearch();

    useEffect(() => {
        fetchData(keyword);
    }, []);

    return (
        <View className="flex-col w-full h-full p-4 gap-4">
            <View className="flex-row items-center gap-2 bg-white">
                <View className="flex-1 flex-row items-center gap-2 px-2 py-[10px] rounded-lg shadow-xs border border-neutral-200">
                    <Search size={20} color={"#d4d4d4"} />
                    <TextInput placeholder="검색어를 입력하세요." value={keyword} onChangeText={setKeyword} className="w-full" />
                </View>
                <Pressable className="w-16 h-12 flex-row items-center justify-center bg-neutral-100 rounded-lg border border-neutral-200" onPress={() => fetchData(keyword)}>
                    <Text>검색</Text>
                </Pressable>
            </View>
            {loading ? (
                <ActivityIndicator size="large" color="#4B5563" />
            ) : data === undefined ? (
                <View className="w-full h-full items-center justify-center">
                    <Text className="text-neutral-400">조회 가능한 데이터가 없습니다.</Text>
                </View>
            ) : (
                <FlatList data={data} renderItem={({ item }) => <InfoCard props={item}></InfoCard>} ItemSeparatorComponent={() => <View style={{ height: 14 }} />} />
            )}
        </View>
    );
}
