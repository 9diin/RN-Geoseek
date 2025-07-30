import { Image, Text, View } from "react-native";

export function BlogCard() {
    return (
        <View className="p-4 bg-white rounded-lg border border-neutral-200">
            <View className="gap-2">
                <View className="w-full flex-row gap-2">
                    <Image source={require("../assets/blog-logo.png")} className="w-6 h-6 mt-[2px]" />
                    <Text className="text-lg font-semibold line-clamp-1">서울 나들이 서울 특별시청, 덕수궁-돈덕전</Text>
                </View>
                <Text className="text-neutral-500 line-clamp-4">
                    서울특별시청 로비 시민들을 위한 문화공간으로 탈바꿈했다고 한다 로봇카페도 있는데 주문하면 로봇이 커피를 만들어주는 신기한 광경도 볼 수 있다. #서울광장 서울광장에선 어린이날을 위한
                    서울페스타가...
                </Text>
            </View>
            <View className="h-px bg-neutral-200 my-3" />
            <View className="gap-2">
                <View className="flex-row items-center gap-2">
                    <View className="w-fit h-fit bg-neutral-50 border border-neutral-100 px-2 py-1 rounded-md">
                        <Text className="text-sm text-neutral-500">닉네임</Text>
                    </View>
                    <Text>도시다람쥐의 소꿉놀이</Text>
                </View>
                <View className="flex-row items-center gap-2">
                    <View className="w-fit h-fit bg-neutral-50 border border-neutral-100 px-2 py-1 rounded-md">
                        <Text className="text-sm text-neutral-500">작성일</Text>
                    </View>
                    <Text>2025-07-31</Text>
                </View>
            </View>
        </View>
    );
}
