import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./AppRouter.tsx";
import { CartProvider } from "./component/Contexts/Cart.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <AppRouter />
  </CartProvider>
);
