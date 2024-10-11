import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [Products, setProductData] = useState([]);
  const [faleshSales, SetFleshSales] = useState([]);
  const [data2, setData2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState(null);

  const fetchData = async () => {
    try {
      const [reponse1, reponse2, reponse3] = await Promise.all([
        axios.get("https://api.escuelajs.co/api/v1/products"),
        axios.get("https://api.escuelajs.co/api/v1/categories"),
        axios.get("https://api.escuelajs.co/api/v1/products"),
      ]);
      setProductData(reponse1.data.slice(1,10));
      setData2(reponse2.data.slice(10,20));
      SetFleshSales(reponse3.data.slice(10,20));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{ Products, data2, faleshSales, loading, err }}
    >
      {children}
    </DataContext.Provider>
  );
};
