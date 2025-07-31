import { useState } from "react";

export function useNaverSearch() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async (query: string) => {
        setLoading(true);

        try {
            const encodedQuery = encodeURIComponent(query);
            const response = await fetch(`https://openapi.naver.com/v1/search/local.json?query=${encodedQuery}&display=5`, {
                method: "GET",
                headers: {
                    "X-Naver-Client-Id": process.env.EXPO_PUBLIC_NAVER_CLIENT_ID as string,
                    "X-Naver-Client-Secret": process.env.EXPO_PUBLIC_NAVER_CLIENT_SECRET as string,
                },
            });
            const data = await response.json();

            if (data) setData(data.items);
        } catch (error) {
            console.log(error);
            throw new Error(`NAVER SEARCH API ERROR: ${error}`);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, fetchData };
}
