import { createContext } from "react";
// 型別
import { TitleContextType } from "./type";

// 创建上下文
export const TitleContext = createContext<TitleContextType>({
  title: "",
  setTitle: () => {}
});
