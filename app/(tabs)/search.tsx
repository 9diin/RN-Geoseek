import { BlogCard } from "@/src/components";
import { useNaverBlog } from "@/src/hooks";
import { useAxisStore, useKeywordStore } from "@/src/stores";
import { ChevronRight } from "lucide-react-native";
import { useEffect } from "react";
import { FlatList, Linking, Pressable, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function SearchScreen() {
    const mapx = useAxisStore((state) => state.mapx);
    const mapy = useAxisStore((state) => state.mapy);

    const keyword = useKeywordStore((state) => state.keyword);
    const { blogs, loading, fetchData } = useNaverBlog();

    useEffect(() => {
        fetchData(keyword);
    }, []);

    const HTML = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
                <script type="text/javascript" src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.EXPO_PUBLIC_NCP_KEY_ID}"></script>
            </head>
            <body>
                <div id="map" style="width:100%;height:320px;"></div>
                <script>
                    const mapOptions = {
                        center: new naver.maps.LatLng(${mapy || 37.5665}, ${mapx || 126.978}),
                        zoom: 16
                    };
                    const map = new naver.maps.Map('map', mapOptions);

                    const marker = new naver.maps.Marker({
                        position: new naver.maps.LatLng(${mapy || 37.5665}, ${mapx || 126.978}),
                        map: map
                    });
                </script>
            </body>
        </html>
    `;

    return (
        <View className="flex-col w-full p-4 gap-4">
            <View className="w-full bg-white p-4 rounded-lg border border-neutral-200">
                <View className="w-full gap-2">
                    <View className="w-full flex-row items-center justify-between">
                        <Text className="text-xl font-semibold">서울특별시청</Text>
                        <Pressable onPress={() => Linking.openURL("https://naver.com")} className="flex-row items-center gap-1">
                            <Text className="text-sm">바로가기</Text>
                            <ChevronRight size={16} className="text-neutral-500" />
                        </Pressable>
                    </View>
                    <View className="h-px bg-neutral-200 my-1" />
                    <View className="w-full gap-1">
                        <View className="w-full flex-row items-center gap-1">
                            <View className="w-fit h-fit bg-neutral-50 border border-neutral-100 px-2 py-1 rounded-md">
                                <Text className="text-xs text-neutral-500">지번</Text>
                            </View>
                            <Text className="flex-1 text-sm text-neutral-500 line-clamp-1">{"등록된 지번이 없습니다."}</Text>
                        </View>
                        <View className="w-full flex-row items-center gap-1">
                            <View className="w-fit h-fit bg-neutral-50 border border-neutral-100 px-2 py-1 rounded-md">
                                <Text className="text-xs text-neutral-500">도로명</Text>
                            </View>
                            <Text className="flex-1 text-sm text-neutral-500 line-clamp-1">{"등록된 도로명이 없습니다."}</Text>
                        </View>
                        <View className="w-full flex-row items-center gap-1">
                            <View className="w-fit h-fit bg-neutral-50 border border-neutral-100 px-2 py-1 rounded-md">
                                <Text className="text-xs text-neutral-500">전화번호</Text>
                            </View>
                            <Text className="text-sm text-neutral-500">{"010-1234-5678"}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View className="h-px bg-neutral-200" />
            <View className="w-full h-80">
                <WebView source={{ html: HTML, baseUrl: "http://localhost:8081" }} originWhitelist={["*"]} javaScriptEnabled domStorageEnabled />
            </View>
            {blogs === undefined ? (
                <View className="w-full h-full items-center justify-center">
                    <Text className="text-neutral-400">조회 가능한 데이터가 없습니다.</Text>
                </View>
            ) : (
                <FlatList data={blogs} renderItem={({ item }) => <BlogCard props={item}></BlogCard>} ItemSeparatorComponent={() => <View style={{ height: 14 }} />} />
            )}
        </View>
    );
}
