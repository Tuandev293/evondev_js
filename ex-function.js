// 1. Write function to check if number is even, fn(2) -> true, fn(3) -> false
function isEven(number) {
  return number % 2 === 0;
}
// 2. Write function to convert string to prefix string, example: fn('i love to learn javascript', '_') -> i_love_to_learn_javascript
function toPrefixString(str, prefix) {
  const fn = str.split(" ").join(prefix);
  return fn;
}
console.log(toPrefixString("i love to learn js", "_"));
// 3. Write function to calculate age, example: fn(1994) -> 29
function calculateAge(yearOfBirth) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - yearOfBirth;
  return age;
}
console.log(calculateAge(2003));
// 4. Write any function using closure
function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const incrementCounter = counter();
incrementCounter();

// 5. Write function sum of three numbers, fn(a,b,c)
function sumThreeNumbers(a, b, c) {
  const result = a + b + c;
  return result;
}
console.log(sumThreeNumbers(3, 4, 5));
// 6. Write function to get random number from 0 to 1000, example: fn() -> 321
function getRandomNumber() {
  const random = Math.floor(Math.random() * 1001);
  return random;
}
console.log(getRandomNumber());
// 7. Write function to truncate a string, example: fn(str, limit, prefix) -> fn('evondev', 2, '...') -> ev...
function truncateString(str, limit, prefix) {
  if (str.length <= limit) {
    return str;
  }

  prefix = prefix || "...";
  return str.slice(0, limit) + prefix;
}
console.log(truncateString("evondev"));
// 8. Write function return typeof value, fn('evondev') -> string
function getTypeOfValue(value) {
  return typeof value;
}
console.log(getTypeOfValue(2));
// 9. Write function to check if str includes word, fn("evondev", vonz) -> false
function includesWord(str, word) {
  return str.includes(word);
}
console.log(includesWord("evondev", "dev"));
