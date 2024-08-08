import React, { ReactNode, useState, useMemo } from "react";
// context
import { TitleContext } from "./context";

// props type
interface TitleProviderProps {
  children: ReactNode;
}

// 使用 useMemo 来记忆化上下文值
const TitleProvider: React.FC<TitleProviderProps> = ({ children }) => {
  const [title, setTitle] = useState("");

  // 使用 useMemo 来记忆化上下文值
  const contextValue = useMemo(() => ({ title, setTitle }), [title, setTitle]);

  return (
    <TitleContext.Provider value={contextValue}>
      {children}
    </TitleContext.Provider>
  );
};

export { TitleContext, TitleProvider };
