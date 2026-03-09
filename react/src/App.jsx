import { useEffect, useState } from "react";
import Form from "./components/Form";
import { IoMdHome } from "react-icons/io";

const App = () => {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("");
  const [status, setStatus] = useState(false);

  

  useEffect(() => {
    // handleAdd();
    console.log("Hello");
  }, [status]);

  // const handleAdd = () => {
  //   setCount((prev) => prev + 1);
  //   console.log(count);
  // };

  return (
    <button
      onClick={() => setStatus(!status)}
      className="p-2 px-4 rounded-md text-white cursor-pointer bg-red-500"
    >
      <IoMdHome />
      {status ? "OFF" : "ON"}
    </button>
    // <div className="h-screen" style={{ backgroundColor: bgColor }}>
    //   <div className="bg-transparent flex justify-between px-16 items-center">
    //     {/* <span>{count}</span>
    //   <button onClick={handleAdd} className="p-2 px-4 rounded-md bg-blue-500">
    //     +
    //   </button> */}
    //     {/* <Form text={"Register"} /> */}
    //     <button
    //       onClick={() => setBgColor("red")}
    //       className="p-2 px-4 rounded-md text-white cursor-pointer bg-red-500"
    //     >
    //       Red
    //     </button>
    //     <button
    //       onClick={() => setBgColor("green")}
    //       className="p-2 px-4 rounded-md text-white cursor-pointer bg-green-500"
    //     >
    //       Green
    //     </button>
    //     <button
    //       onClick={() => setBgColor("blue")}
    //       className="p-2 px-4 rounded-md text-white cursor-pointer bg-blue-500"
    //     >
    //       Blue
    //     </button>
    //     <button
    //       onClick={() => setBgColor("black")}
    //       className="p-2 px-4 rounded-md text-white cursor-pointer bg-black"
    //     >
    //       Black
    //     </button>
    //     <button
    //       onClick={() => setBgColor("yellow")}
    //       className="p-2 px-4 rounded-md text-white cursor-pointer bg-yellow-500"
    //     >
    //       Yellow
    //     </button>
    //   </div>
    // </div>
  );
};

export default App;
