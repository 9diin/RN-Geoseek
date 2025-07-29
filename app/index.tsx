import { useState } from "react";
import { Image, Modal, Pressable, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
    const [isModalVisible, setModalVisible] = useState(false);

    return (
        // React Native에서 SafeAreaView는 기기별 "안전한 영역(Safe Area)" 안에 콘텐츠를 배치하도록 보장해주는 컴포넌트입니다. 특히 iPhone X 이후의 노치(notch), 상태바(StatusBar), 홈 인디케이터 등이 있는 기기에서 중요합니다.
        // SafeAreaView는 기기의 화면 중 콘텐츠가 시스템 UI에 가려지지 않도록 보호해주는 레이아웃 컴포넌트입니다.

        <SafeAreaView className="flex-1 bg-white p-6">
            <View className="w-full h-full flex items-center justify-center gap-6">
                {/* 리액트 네이티브에서 View 컴포넌트는 HTML의 <div> 또는 <section> 태그와 비슷한 역할을 합니다. */}
                {/* View 컴포넌트는 레이아웃을 구성하는 기본 단위 입니다. */}
                {/* 다른 컴포넌트들을 감싸는 컨테이너 역할을 수행합니다. */}
                <Text className="text-2xl font-semibold">
                    {/* 리액트 네이티브에서 Text 컴포넌트는 HTML의 <p>, <span>, <h1~6> 등 텍스트 관련 태그를 대체합니다. */}
                    {/* React Native에서는 반드시 Text 컴포넌트 안에 문자열을 넣어야 텍스트가 화면에 보입니다. */}
                    안녕하세요, 개발자 9Diin 입니다.
                </Text>
                {/* 리액트 네이티브에서 Image 컴포넌트는 HTML <img>와 동일한 기능을 수행합니다. */}
                {/* 네트워크 또는 로컬 환경의 이미지를 출력합니다. */}
                <Image source={{ uri: "https://github.com/9diin.png" }} className="w-40 h-40 rounded-full" />

                {/* 리액트 네이티브에서 TextInput 컴포넌트는 HTML의 <input> 태그에 해당합니다. */}
                {/* 사용자의 입력을 받을 수 있는 컴포넌트입니다. */}
                <TextInput placeholder="검색어를 입력하세요." />

                {/* 리액트 네이티브에서 Pressable 컴포넌트는 HTML의 <button> 태그와 유사한 역할을 합니다. */}
                {/* 사용자의 터치 입력을 받아 동작을 수행하며, 상태에 따라 다양한 스타일을 줄 수 있습니다. */}
                <Pressable onPress={() => alert("버튼이 눌렸습니다!")} className="px-4 py-2 bg-blue-500 rounded-lg">
                    <Text className="text-white font-semibold">버튼</Text>
                </Pressable>

                {/* 리액트 네이티브에서 TouchableOpacity 컴포넌트도 HTML의 <button>과 유사한 역할을 합니다. */}
                {/* 터치 시 시각적으로 투명도가 낮아지는 효과가 있습니다. */}
                {/* 커스텀 버튼을 만들 때 널리 사용되는 컴포넌트입니다. */}
                <TouchableOpacity onPress={() => alert("TouchableOpacity 버튼이 눌렸습니다!")} className="px-4 py-2 bg-green-500 rounded-lg">
                    <Text className="text-white font-semibold">TouchableOpacity 버튼</Text>
                </TouchableOpacity>

                {/* 리액트 네이티브에서 ScrollView 컴포넌트는 HTML의 overflow: scroll 처리된 <div> 태그와 유사합니다. */}
                {/* <ScrollView>는 일반적으로 부모 View가 차지한 영역만큼만 렌더링됩니다. */}
                <View className="w-full h-10">
                    <ScrollView>
                        <Text>첫 번째 항목</Text>
                        <Text>두 번째 항목</Text>
                        <Text>세 번째 항목</Text>
                    </ScrollView>
                </View>

                {/* React Native에서 Modal 컴포넌트는 HTML의 <dialog>나, CSS로 구현하는 팝업 레이어와 유사합니다. */}
                {/* 기본적으로 화면 전체를 덮는 전환 가능한 창을 렌더링합니다. */}
                {/* 주로 알림창, 설정창, 팝업 상세 보기 등에 사용됩니다. */}
                <Pressable onPress={() => setModalVisible(true)}>
                    <Text>모달창 열기</Text>
                </Pressable>
                <Modal
                    visible={isModalVisible}
                    onRequestClose={() => setModalVisible(false)}
                    animationType="slide"
                    presentationStyle="fullScreen"
                    statusBarTranslucent={true} // Android에선 이거 없으면 SafeAreaView 무효
                >
                    <SafeAreaView className="flex-1 bg-white p-6">
                        <Text className="text-lg font-semibold">해당 화면은 모달창 입니다.</Text>
                        <Pressable onPress={() => setModalVisible(false)} className="mt-4">
                            <Text className="text-blue-600">모달창 닫기</Text>
                        </Pressable>
                    </SafeAreaView>
                </Modal>
            </View>
        </SafeAreaView>
    );
}
