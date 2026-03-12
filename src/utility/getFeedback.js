export const getFeedback = (word, secretWord) => {
    const wordLetters = word.split("");
    const styles = Array(5).fill("red");
    const secretPool = new Map();

    secretWord.split("").forEach((letter) => {
        if (secretPool.has(letter)) {
            secretPool.set(letter, secretPool.get(letter) + 1);
        } else {
            secretPool.set(letter, 1);
        }
    });

    wordLetters.forEach((letter, idx) => {
        if (letter === secretWord[idx]) {
            styles[idx] = "green";

            const count = secretPool.get(letter);

            if (count === 1) {
                secretPool.delete(letter);
            } else {
                secretPool.set(letter, count - 1);
            }
        }
    });

    wordLetters.forEach((letter, idx) => {
        if (secretPool.has(letter)) {
            styles[idx] = 'yellow';
        }
    });

    return { wordLetters, styles };
}
