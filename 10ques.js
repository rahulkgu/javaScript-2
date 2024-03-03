function countWordOccurrences(sentence) {
    const words = sentence.toLowerCase().split(/\s+/);
    console.log(words);
    const wordCountMap = new Map();
    console.log("this is empty" + wordCountMap);

    words.forEach(word => {
        const count = wordCountMap.get(word) || 0;
        console.log(Number(wordCountMap.get(word)));
        console.log(count);
        wordCountMap.set(word, count + 1);

    });

    return wordCountMap;
}

const sentence = "please please submit your assignment on time, your assignments are important";
const wordOccurrences = countWordOccurrences(sentence);

console.log(wordOccurrences);
//not completed