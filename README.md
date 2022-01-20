Describe : luhnAlgorithm()

Test: "It should turn the form entry into an array"
code:
const text = "4102080860435620"
luhnAlgorithm(text){
  const inputArray = text.split("")
}
Expected Output: ["4", "1", "0", "2", "0", "8", "0", "8", "6", "0", "4", "3", "5", "6", "2", "0"]

Test: "It should turn the array from strings into numbers"
code:
const text = "4102080860435620"
luhnAlgorithm(text)
Expected output: [4, 1, 0, 2, 0, 8, 0, 8, 6, 0, 4, 3, 5, 6, 2, 0]

Test: "It should reverse the array"
code:
const text = "4102080860435620"
luhnAlgorithm(text)
Expected Output: [0, 2, 6, 5, 3, 4, 0, 6, 8, 0, 8, 0, 2, 0, 1, 4]

Test: "It should double every other number in the array"
code:
const text = "4102080860435620"
luhnAlgorithm(text)
Expected Output: [0, 2, 12, 5, 6, 4, 0, 6, 16, 0, 16, 0, 4, 0, 2, 4]


Test: "It should take double digit numbers in the array, and then add together each digit, and return the sum"
code:
const text = "4102080860435620"
luhnAlgorithm(text)
Expected Output: [0, 2, 3, 5, 6, 4, 0, 6, 7, 0, 7, 0, 4, 0, 2, 4]


Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1
