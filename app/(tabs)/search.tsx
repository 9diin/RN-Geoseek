import { BlogCard } from "@/src/components";
import { useNaverBlog } from "@/src/hooks";
import { ChevronRight, Search } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Linking, Pressable, Text, TextInput, View } from "react-native";
import { WebView } from "react-native-webview";

const HTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
            <script type="text/javascript" src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=9ab8xv0kjx"></script>
        </head>
        <body>
            <div id="map" style="width:100%;height:320px;"></div>

            <script>
                let mapOptions = {
                    center: new naver.maps.LatLng(37.3595704, 127.105399),
                    zoom: 16
                };
                let map = new naver.maps.Map('map', mapOptions);
                // window.ReactNativeWebView.postMessage();

                let marker = new naver.maps.Marker({
                    position: new naver.maps.LatLng(37.3595704, 127.105399), // 마커 위치
                    map: map, // 표시할 지도 객체
                });
            </script>
        </body>
    </html>
`;

export default function SearchScreen() {
    const [keyword, setKeyword] = useState<string>("서울특별시청");
    const { blogs, loading, fetchData } = useNaverBlog();

    useEffect(() => {
        fetchData(keyword);
    }, []);

    return (
        <View className="flex-col w-full h-full p-4 gap-4">
            <View className="flex-row items-center gap-2 bg-white">
                <View className="flex-1 flex-row items-center gap-2 px-2 py-[10px] rounded-lg shadow-xs border border-neutral-200">
                    <Search size={20} color={"#d4d4d4"} />
                    <TextInput placeholder="검색어를 입력하세요." value={keyword} onChangeText={setKeyword} />
                </View>
                <Pressable className="w-16 h-12 flex-row items-center justify-center bg-neutral-100 rounded-lg border border-neutral-200">
                    <Text>검색</Text>
                </Pressable>
            </View>
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
            <WebView source={{ html: HTML, baseUrl: "http://localhost:8081" }} originWhitelist={["*"]} javaScriptEnabled domStorageEnabled />
            <View className="w-full flex-row">
                <BlogCard />
            </View>
        </View>
    );
}
