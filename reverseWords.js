function reverseWordsInSentence(sentence) {
    // Split the sentence into words using whitespace as the delimiter
    const words = sentence.split(' ');

    // Reverse each word and store them in a new array
    const reversedWords = words.map(word => reverseWord(word));

    // Join the reversed words back into a sentence
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

function reverseWord(word) {
    return word.split('').reverse().join('');
}

// Example usage:
const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence); // Output: "sihT si a ynnus yad"