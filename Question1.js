// Output: { vowels: 3, consonants: 7 }

function countVowelsAndConsonants(str) {
  let cleanStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();

  let vowel = 0;
  let consonant = 0;
  for (let i = 0; i < cleanStr.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      vowel++;
    } else {
      consonant++;
    }
  }
  console.log({ vowels: vowel, consonants: consonant });
}

countVowelsAndConsonants("Hello World!");