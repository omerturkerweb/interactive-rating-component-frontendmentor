import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const Provider = ({ children }) => {
  const [submitted, setSubmitted] = useState(false);
  const [rate, setRate] = useState(null);
  const data = {
    submitted,
    setSubmitted,
    rate,
    setRate,
  };
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};
