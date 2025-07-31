import { Image, Linking, Pressable, Text, View } from "react-native";

interface Props {
    props: {
        bloggerlink: string;
        bloggername: string;
        description: string;
        link: string;
        postdate: string;
        title: string;
    };
}

export function BlogCard({ props }: Props) {
    return (
        <Pressable className="w-full p-4 bg-white rounded-lg border border-neutral-200" onPress={() => Linking.openURL(props.bloggerlink)}>
            <View className="w-full gap-2">
                <View className="w-full flex-row gap-2">
                    <Image source={require("../assets/blog-logo.png")} className="w-6 h-6 mt-[2px]" />
                    <Text className="flex-1 text-lg font-semibold line-clamp-1">{props.title.replace(/<[^>]+>/g, "")}</Text>
                </View>
                <Text className="text-neutral-500 text-justify line-clamp-4">{props.description.replace(/<[^>]+>/g, "")}</Text>
            </View>
            <View className="h-px bg-neutral-200 my-3" />
            <View className="gap-2">
                <View className="flex-row items-center gap-2">
                    <View className="w-fit h-fit bg-neutral-50 border border-neutral-100 px-2 py-1 rounded-md">
                        <Text className="text-sm text-neutral-500">닉네임</Text>
                    </View>
                    <Text>{props.bloggername}</Text>
                </View>
                <View className="flex-row items-center gap-2">
                    <View className="w-fit h-fit bg-neutral-50 border border-neutral-100 px-2 py-1 rounded-md">
                        <Text className="text-sm text-neutral-500">작성일</Text>
                    </View>
                    <Text>{props.postdate}</Text>
                </View>
            </View>
        </Pressable>
    );
}
