import { createContext, useContext } from "react";
import useFetchProducts from "../hooks/useFetchProducts";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const { products, loading, error } = useFetchProducts();

  return (
    <ProductsContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
