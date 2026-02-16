// const myForm = document.querySelector(".myForm");

// const text = document.querySelector(".text");

// const btn = document.querySelector(".btn");

// text.addEventListener("onchange", () => {
//   //   alert("changed.");
//   console.log("change");
// });

// const timeout = setTimeout(() => {
//   alert("Timeout");
// }, 2000);

// clearTimeout(timeout);

let a = 0;
let min = 0;
const interval = setInterval(() => {
  a++;
  console.log(a);
  if (a >= 15) {
    min++;
    console.log(min + "min");
    a = 0;
  }
}, 1000);
