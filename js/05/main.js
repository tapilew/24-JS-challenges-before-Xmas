function findLargestPalindrome(words) {
  const isPalindrome = (word) => {
    const straight = word.trim().toLowerCase();
    const reversed = straight.split("").reverse().join("");
    return reversed === straight;
  };

  let largest = null;

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) continue;
    if (largest === null) largest = words[i];
    if (words[i].length > largest.length) largest = words[i];
  }

  return largest;
}

console.log(findLargestPalindrome(["racecar", "level", "world", "hello"]));
console.log(findLargestPalindrome(["Platzi", "javascript", "html", "css"]));
