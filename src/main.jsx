import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import router from "./routes/AppRouter";
import "./styles/globals.css";
import { ProductsProvider } from "./context/ProductsContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  </StrictMode>
);
