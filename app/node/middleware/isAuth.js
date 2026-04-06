import jwt from "jsonwebtoken";

export const isVerify = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token);

  if (!token) {
    return res.send("Please Login first");
  }
  //   console.log(token);
  const user = jwt.verify(token, "secretkey");
  //   console.log(user);
  req.user = user;
  next();
};

export const isAdmin = (req, res, next) => {
  const user = req.user;
  console.log(user);

  if (user.role === "admin") {
    next();
  } else {
    return res.status(401).send("Unauthorized");
  }
};

// export const isStaff = (req, res, next) => {
//   const user = isVerify();
//   if (user.role === "staff" || user.role === "admin") {
//     next();
//   } else {
//     return res.status(401).send("Unauthorized");
//   }
// };
