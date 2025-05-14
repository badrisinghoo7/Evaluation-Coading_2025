// Write a function deepCopy that accepts an object and returns a deep copy of that object.
// Requirements:
// If the object contains nested objects, make sure the nested objects are also copied and not referenced.
// Example:
// const obj = {
//   name: "John",
//   address: {
//     city: "New York",
//     zip: 10001
//   }
// };

// const copy = deepCopy(obj);
// console.log(copy);
// Output: { name: "John", address: { city: "New York", zip: 10001 } }

function deepCopy(obj) {
    let copy ={}
  for(let key in obj){
    copy[key]=obj[key]
  }
  console.log(copy)
}

deepCopy({ name: "John", address: { city: "New York", zip: 10001 } });