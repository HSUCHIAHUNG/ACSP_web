import { useEffect } from "react";
// router
import { Outlet, useLocation } from "react-router-dom";
// 組件
import Header from "../components/layout/Header.tsx";

function DefaultLayout() {
  // 當前路由
  const { pathname } = useLocation();

  // 切換路由讓頁面保持在最上方
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
     

      <div className=" min-h-[100vh] w-full m-[0_auto] ssm:w-[579px] ">
        <Header />
        <div className="flex-1 relative pt-[62px] pb-[40px] px-[1rem] ssm:px-[2rem] ">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default DefaultLayout;
