import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!url) return;
        fetch(url)
            .then((res) => res.json())
            .then((fetched) => setData(fetched))
            .catch(() => setData([]));
    }, [url]);

    return data;
};

export default useFetch;