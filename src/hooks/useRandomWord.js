import { useEffect, useState } from "react";

export const useRandomWord = () => {
    const [ randomWord, setRandomWord ] = useState("");
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        
    }, [])

    return { randomWord, loading };
}
