const reverseString = (str: string) => {
  var splitString = str.split("");

  var reverseArray = splitString.reverse();

  var joinArray = reverseArray.join("");

  return joinArray;
};

const AdvancedPalindromeCheck = (input: string) => {
  var newInput = input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w]/g, "")
    .replace(/\s+/g, "")
    .toLocaleUpperCase();
  var reverseInput = reverseString(newInput);
  return newInput === reverseInput;
};

console.log(AdvancedPalindromeCheck("A man, a plan, a canal, Panamá"));
