// Palindrom check

function palindrom(str) {
  let cleanStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  //   console.log(cleanStr);
  let reversedStr = cleanStr.split("");
  //   console.log(reversedStr);
  let ans = "";
  for (let i = reversedStr.length - 1; i >= 0; i--) {
    ans += reversedStr[i];
  }
  if (ans === cleanStr) {
    console.log("true");
  } else {
    console.log("false");
  }
}

palindrom("A man, a plan, a canal: Panama");
