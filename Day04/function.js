// // array function yg membutuhkan callback
// let arr = [2, 1, 3, 12, 14, 45];

// // ARRAY FUNCTION
// // for (const iterator of arr) {
// //   console.log(iterator);
// // }
// arr.forEach((value, index) => {
//   //   console.log(value);
//   console.log(index);
// });
// let result = "";
// arr.forEach((value, index) => {
//   result += `${value} berada di index ${index}\n`;
// });
// console.log(result);

// arr.map;

// let newArr = ['BMW', 'Toyota', "Lexus"], ['BMW', 'Toyota', "Lexus"], ['BMW', 'Toyota', "Lexus"]

// function duplicateMap(callbackfn, dataArr) {
//   let arr = [];
//   for (let index = 0; index < dataArr.length; index++) {
//     let value = dataArr[index];
//     let newData = callbackfn(value, index);
//     console.log(newData);
//     arr.push(newData);
//   }

//   return arr;
// }
// let resultMap = duplicateMap((value, index) => {
//   console.log(value);
//   console.log(index + 1);
//   return `${value}`;
// }, newArr);

// console.log(resultMap);
let newArr = ["BMW", "Toyota", "Lexus"];

function duplicateFilter(callbackfn, dataArr) {
  let arr = [];
  for (let index = 0; index < dataArr.length; index++) {
    let value = dataArr[index];
    let conditionResult = callbackfn(value, index);
    // console.log(conditionResult);
    if (conditionResult == true) {
      arr.push(conditionResult);
    }
  }
  return arr;
}
let filterData = duplicateFilter((value, index) => {
  // return true;
  console.log(value);
  console.log(index);
  return true;
}, newArr);

// console.log(resultFilter);
// duplicateMap((value, index, arr) => {
//   console.log(value);
//   console.log(index);
// }, newArr);

// Map Array: untuk mengakses data dan indeks pada array sekaligus menghasilkan array baru dengan data yang baru
// let numArray = [1, 2, 3, 4, 5];
// let newNumArr = numArray.map((value, index) => {
//   console.log(value);
//   console.log(index);
//   const multiple = value + index;
//   console.log(multiple);
//   return multiple;
// });

// console.log(newNumArr);

// array.filter(callback) : untuk mengakses setiap data dan index dari suatu array sekaligus menghasilkan data array baru.
// sesuai condition yang diberikan oleh callback function

let money = [1000, 500, 2000, 3000, 10000, 12000];
let newMoney = money.filter((val, idx) => {
  console.log(val);
  console.log(idx);
  // Mau memfilter data dari array money, hanya ambil nominal yg di bawah 5000
  return val <= 10000;
});

console.log(newMoney);
