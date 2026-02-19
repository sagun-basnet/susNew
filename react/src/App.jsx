import React from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <Button text={"Click"} color={"red"} />
      <Button text={"More"} color={"blue"} />
      <Button text={"Login"} color={"yellow"} />
      <Button text={"Register"} color={"purple"} />
    </>
  );
};

export default App;
