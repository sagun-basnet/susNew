// var num = 87;
// let a = true;
// let b = "sdfs";

// console.log(a);
// var b

// if (!a) {
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// function myFun(a, b) {
//   let c = a + b;
//   return c;
// }

const myFun = (a, b) => {
  let c = a + b;
  return c;
};

// console.log(myFun(1, 2));
// myFun(3, 2);
// myFun(4, 2);

// null/ undefined

let arr = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "sdfsd",
  [2, 23, 4, 55],
  45.34,
  true,
  false,
  //   myFun(),
  null,
  undefined,
  { name: "sfgsdf", age: 23 },
];

console.log(arr[arr.length - 1].name);

let obj = {
  name: "jhon",
  age: 24,
  phone: "981234567",
  arr: [1, 2, 3, 4, 56, 6, "asdf"],
  aaa: null,
  //   fun: myFun(),
};

console.log(obj.arr[1]);

[
  {
    name: "jhon",
    data: [{}, {}],
  },
  {
    name: "hello",
  },
  {
    name: "hello",
  },
  {
    name: "hello",
  },
  {
    name: "hello",
  },
];

console.log(data[1].name);
