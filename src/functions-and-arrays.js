// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return num1;
  }
}
console.log(maxOfTwoNumbers(10, 16));
console.log(maxOfTwoNumbers(22, 16));
console.log(maxOfTwoNumbers(6, 6));

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];
function findLongestWord(words) {
  if (words.length === 0) return null;

  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord(words));

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}
console.log(sumNumbers(numbers));

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(averageNum) {
  if (averageNum.length === 0) return 0;
  if (averageNum.length === 1)
    return sumNumbers(averageNum) / averageNum.length;
  if (averageNum.length >= 1) return sumNumbers(averageNum) / averageNum.length;
}
console.log(sumNumbers(numbers2) / numbers2.length);

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(wordarray, wordtosearch) {
  if (wordarray.length === 0) return null;
  if (wordarray.includes(wordtosearch)) return true;
  else return false;
}
console.log(doesWordExist(words2, "cold"));
console.log(doesWordExist(words2, "starting"));
console.log(doesWordExist(words2, []));
