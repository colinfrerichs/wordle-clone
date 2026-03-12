export const getFeedback = (word, secretWord) => {
    console.log("at least ive been called");
    /*
        so essentially - we have to check every letter
        return a {letter, style}

        the style is green - in correct place, so we check for that first
        the yellow means it's in the word, but in the wrong place
        the red means it is not in the word

        so, i think it's if the secretWord includes the letter ->
        check if the letter is in the right place

        if it is, green
        if it is not, red
    */
}
