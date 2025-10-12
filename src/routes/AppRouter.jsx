import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import ProductDetails from "../components/Products/ProductDetails";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/product/:id", element: <ProductDetails /> },
]);

export default router;
