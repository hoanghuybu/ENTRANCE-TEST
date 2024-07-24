// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
//  Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

const input: Array<string> = ["eat", "tea", "tan", "ate", "nat", "bat"];

const AnagramGroups = (input: string[]) => {
  var anagramsObject: { [key: string]: string[] } = {};
  for (let word of input) {
    const covertWord = word.split("").sort().join("");

    if (!anagramsObject[covertWord]) {
      anagramsObject[covertWord] = [];
    }
    anagramsObject[covertWord].push(word);
  }
  return Object.values(anagramsObject);
};

console.log(AnagramGroups(input));
