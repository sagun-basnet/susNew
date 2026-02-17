// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// const name = "jhon";

// // console.log("hello " + name + "I am " + asdf + "");

// console.log(`Hello ${name}`);

// const add = (a, b = 0) => {
//   console.log(a + b);
// };

// add(1, 8);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// const [second, first, third, f, fi] = arr
// console.log(second, first, third);

// const first = arr[0];
// const second = arr[1]

// const obj = {
//   name: "jhon deo",
//   age: 35,
//   email: "jhon@gmail.com",
//   phone: "9812345678",
// };

// const myFun = ({ name }) => {
//   console.log(name);
// };

// myFun(obj);

// const { age, email } = obj;

// console.log(age, email);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 0];

// // console.log(...arr1);

// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// const [first, second, third, ...others] = arr;

// console.log(first, second, third, others);

const obj = {
  name: "jhon deo",
  age: 35,
  email: "jhon@gmail.com",
  password: "1234567890",
  phone: "9812345678",
};

// console.log(obj.name, obj.email);

const { password, ...others } = obj;

console.log(others);
