import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import ProductDetails from "../components/Products/ProductDetails";
import About from "../pages/About";
import PageNotFound from "../pages/PageNotFound";
import Contact from "../pages/Contact";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products/:id", element: <ProductDetails /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
  { path: "/signup", element: <Signup /> },

  { path: "*", element: <PageNotFound /> },
]);

export default router;
