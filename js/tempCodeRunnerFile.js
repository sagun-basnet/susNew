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