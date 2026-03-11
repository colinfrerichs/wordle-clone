import { useEffect, useState } from "react";

export const useRandomWord = () => {
    const [ randomWord, setRandomWord ] = useState("");
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const fetchSecretWord = async () => {
            const response = await fetch('https://random-word-api.herokuapp.com/word?length=5');
            
            if (!response.ok) {
                throw new Error("Error fetching secret word");
            }

            const [data] = await response.json();
            setRandomWord(data);
            setLoading(false);
        };

        fetchSecretWord();
    }, [])

    return { randomWord, loading };
}
