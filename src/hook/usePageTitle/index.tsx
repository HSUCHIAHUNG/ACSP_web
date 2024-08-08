// usePageTitle.js
import { useContext, useEffect } from "react";
import { TitleContext } from "../../provider/index";

const usePageTitle = (title: string) => {
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle(title);
  }, [setTitle, title]);
};

export { usePageTitle };
