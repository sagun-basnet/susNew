import React from "react";

const Button = ({ text, color }) => {
  const handleClick = () => {
    alert("hellloooo");
  };
  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: color }}
      className={`p-2 px-4  cursor-pointer rounded-md`}
    >
      {text}
    </button>
  );
};

export default Button;
