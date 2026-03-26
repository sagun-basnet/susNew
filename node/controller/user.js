export const getUser = (req, res) => {
  res.send({
    name: "jhon deo",
    phone: "9812345678",
    email: "jhon@gmail.com",
    password: "1234567890",
    role: "admin",
  });
};
