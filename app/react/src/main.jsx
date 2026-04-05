import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Bounce, ToastContainer } from "react-toastify";
import { AuthContextProvider } from "./context/authContext.jsx";
// import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BrowserRouter>  */}
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    <ToastContainer
      position="bottom-left"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
    {/* </BrowserRouter>   */}
  </StrictMode>,
);
