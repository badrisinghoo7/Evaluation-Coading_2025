function mergeObj(obj1, obj2) {
  let obj = {};
  for (let key in obj1) {
    obj[key] = obj1[key];
  }
  for (let key in obj2) {
    obj[key] = obj2[key];
  }
  console.log(obj);
}
let obj1 = { name: "John", age: 30 };
let obj2 = { age: 40, city: "New York" };
mergeObj(obj1, obj2);
