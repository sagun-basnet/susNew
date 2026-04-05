import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const init = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(init);

  const handleChange = (e) => {
    // console.log(`${e.target.name}: ${e.target.value}`);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(formData);
    console.log(res, ":LOGIN");

    navigate("/");
    setFormData(init);
  };

  return (
    <div className="flex justify-center items-center  h-screen w-full">
      <form
        onSubmit={handleSubmit}
        action=""
        className="rounded-lg w-[30rem] shadow-2xl flex flex-col p-4 gap-4"
      >
        <h1 className="text-3xl font-bold">Login</h1>
        <input
          onChange={handleChange}
          className="border-2 rounded-md p-1 w-full"
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          id=""
        />
        <input
          onChange={handleChange}
          className="border-2 rounded-md p-1 w-full"
          type="password"
          name="password"
          value={formData.password}
          placeholder="Enter your password"
          id=""
        />

        <button type="submit" className="p-2 px-4 rounded-md bg-blue-500">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
