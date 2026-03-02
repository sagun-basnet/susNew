import React from "react";

const Form = ({ text }) => {
  return (
    <div className="flex justify-center items-center  h-screen w-full">
      <form
        action=""
        className="rounded-lg w-[30rem] shadow-2xl flex flex-col p-4 gap-4"
      >
        <h1 className="text-3xl font-bold">{text}</h1>

        {text === "Register" && (
          <>
            <input
              className="border-2 rounded-md p-1 w-full"
              type="text"
              name="name"
              placeholder="Enter your name"
              id=""
            />
            <input
              className="border-2 rounded-md p-1 w-full"
              type="text"
              name="address"
              placeholder="Enter your Address"
              id=""
            />
            <input
              className="border-2 rounded-md p-1 w-full"
              type="number"
              name="phone"
              placeholder="Enter your phone"
              id=""
            />
          </>
        )}

        <input
          className="border-2 rounded-md p-1 w-full"
          type="email"
          name="email"
          placeholder="Enter your email"
          id=""
        />
        <input
          className="border-2 rounded-md p-1 w-full"
          type="password"
          name="password"
          placeholder="Enter your password"
          id=""
        />
        <button className="p-2 px-4 rounded-md bg-blue-500">{text}</button>
      </form>
    </div>
  );
};

export default Form;
