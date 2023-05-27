import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Provider/AuthProvider";
import { Toaster } from "react-hot-toast";
// import AuthProvider, { AuthContext } from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <div className="max-w-screen-xl mx-auto">
      <HelmetProvider>
        <RouterProvider router={router}>
          <Toaster position="top-center" reverseOrder={false}></Toaster>
        </RouterProvider>
      </HelmetProvider>
    </div>
  </AuthProvider>
);
