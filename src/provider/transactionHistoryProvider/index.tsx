import { createContext, ReactNode, useContext, useState } from "react";

interface TitleContextType {
  title: string;
  setTitle: (title: string) => void;
}

const TransactionHistoryContext = createContext<TitleContextType | undefined>(
  undefined
);

export const TransactionHistoryProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [title, setTitle] = useState("Default Title");

  return (
    <TransactionHistoryContext.Provider value={{ title, setTitle }}>
      {children}
    </TransactionHistoryContext.Provider>
  );
};

export const useTitle = () => useContext(TransactionHistoryContext);
