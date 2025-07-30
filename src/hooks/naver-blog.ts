import { useState } from "react";

export function useNaverBlog() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async (query: string) => {
        setLoading(true);

        try {
            const encodedQuery = encodeURIComponent(query);
            const response = await fetch(`https://openapi.naver.com/v1/search/blog.json?query=${encodedQuery}&display=10`, {
                method: "GET",
                headers: {
                    "X-Naver-Client-Id": process.env.EXPO_PUBLIC_NAVER_CLIENT_ID as string,
                    "X-Naver-Client-Secret": process.env.EXPO_PUBLIC_NAVER_CLIENT_SECRET as string,
                },
            });
            const data = await response.json();
            console.log(data.items);

            if (data) setBlogs(data.items);
        } catch (error) {
            console.log(error);
            throw new Error(`NAVER SEARCH API ERROR: ${error}`);
        } finally {
            setLoading(false);
        }
    };

    return { blogs, loading, fetchData };
}
