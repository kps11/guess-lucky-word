export function getLetterMatchCount (guessedword,secretWord){
    const secretLetters = secretWord.split("")
    const guessedLetterSet = new Set(guessedword);
    return secretLetters.filter(letter => guessedLetterSet.has(letter)).length;

}