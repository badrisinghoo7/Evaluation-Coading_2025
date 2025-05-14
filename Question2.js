//Reverse Words in a String

function ReverseAWordString(str) {
  let str1 = str.split(" ");
  //   console.log(str1);
  let reverseStr = "";
  for (let i = 0; i < str1.length; i++) {
    // console.log("str[i] is ", str1[i]);

    reverseStr += reverseWord(str1[i]) + " ";
  }
  console.log(reverseStr);
}

function reverseWord(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
    // console.log(str[i]);
  }
  return reversedStr;
}
ReverseAWordString("JavaScript is fun");
// const result = reverseWords("JavaScript is fun");
// console.log(result);
// Output: "tpircSavaJ si nuf"
