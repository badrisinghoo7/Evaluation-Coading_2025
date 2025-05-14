function arrangeFruits(arr) {
  let fruit = arr.splice(arr.length - 4, 4);
  let ansArr = [];
  // for(let i=0;i<fruit.length;i++ ){
  //     arr.unshift(fruit[i])
  // }

  for (let i = 0; i < fruit.length; i++) {
    ansArr.push(fruit[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    ansArr.push(arr[i]);
  }
  console.log(ansArr);
  // console.log(arr)
}

let fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Pineapple",
  "Grapes",
  "Strawberry",
  "Watermelon",
  "Peach",
  "Kiwi",
];

// ["Strawberry", "Watermelon", "Peach", "Kiwi", "Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes"];

arrangeFruits(fruits);
