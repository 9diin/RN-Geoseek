import { ChevronRight } from "lucide-react-native";
import { FlatList, Linking, Pressable, Text, View } from "react-native";

interface Props {
    props: {
        title: string;
        address: string;
        category: string;
        roadAddress: string;
        telephone: string;
        link: string;
    };
}

export function InfoCard({ props }: Props) {
    return (
        <View className="w-full p-4 gap-2 border border-neutral-200 rounded-lg shadow-xs bg-white">
            <View className="flex-row items-center">
                <FlatList
                    data={props.category.split(">")}
                    renderItem={({ item }) => (
                        <View className="w-fit h-fit bg-neutral-100 border border-neutral-200 px-2 py-1 rounded-md">
                            <Text className="text-xs">{item}</Text>
                        </View>
                    )}
                    horizontal={true}
                    ItemSeparatorComponent={() => <View style={{ width: 4 }} />}
                />
                <Pressable onPress={() => Linking.openURL(props.link)} className="flex-row items-center gap-1">
                    <Text className="text-sm">바로가기</Text>
                    <ChevronRight size={16} className="text-neutral-500" />
                </Pressable>
            </View>
            <View className="h-px bg-neutral-200 my-1" />
            <View className="w-full gap-2">
                <Text className="text-xl font-semibold">{props.title.replace(/<[^>]+>/g, "")}</Text>
                <View className="w-full gap-1">
                    <View className="w-full flex-row items-center gap-1">
                        <View className="w-fit h-fit bg-neutral-50 border border-neutral-100 px-2 py-1 rounded-md">
                            <Text className="text-xs text-neutral-500">지번</Text>
                        </View>
                        <Text className="flex-1 text-sm text-neutral-500 line-clamp-1">{props.address ? props.address : "등록된 지번이 없습니다."}</Text>
                    </View>
                    <View className="w-full flex-row items-center gap-1">
                        <View className="w-fit h-fit bg-neutral-50 border border-neutral-100 px-2 py-1 rounded-md">
                            <Text className="text-xs text-neutral-500">도로명</Text>
                        </View>
                        <Text className="flex-1 text-sm text-neutral-500 line-clamp-1">{props.roadAddress ? props.roadAddress : "등록된 도로명이 없습니다."}</Text>
                    </View>
                    <View className="w-full flex-row items-center gap-1">
                        <View className="w-fit h-fit bg-neutral-50 border border-neutral-100 px-2 py-1 rounded-md">
                            <Text className="text-xs text-neutral-500">전화번호</Text>
                        </View>
                        <Text className="text-sm text-neutral-500">{props.telephone ? props.telephone : "-"}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
