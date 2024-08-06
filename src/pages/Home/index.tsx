// SEO
import { Helmet, HelmetProvider } from "react-helmet-async";
// router
import { NavLink } from "react-router-dom";

const Home = () => {
  // 路由選項
  const menu = [
    { id: 1, name: "會員資料", path: "/memberProfile" },
    { id: 2, name: "付款設定", path: "/payConfig" },
    { id: 3, name: "發票設定", path: "/invoiceConfig" },
    { id: 4, name: "交易紀錄", path: "/transactionHistory" },
  ];

  return (
    <HelmetProvider>
      {/* 頁面title */}
      <Helmet>
        <title>會員中心</title>
      </Helmet>

      <div className={`text-[12px] my-[5px]`}>會員中心</div>
      <div className="flex flex-col gap-[8px]">
        {menu.map((item) => (
          <NavLink
            to={item.path}
            key={item.id}
            className={`relative bg-[#fff] p-[1.85rem_1rem] duration-200 rounded-[5px] shadow-md group hover:bg-[#E95520]/80`}
          >
            <div
              className={` text-[18px]  text-left   group-hover:text-[#fff] `}
            >
              {item.name}
            </div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[3px] h-[20px] bg-[#E95520]/80 group-hover:hidden"></div>
            <span
              className={
                " icon-[weui--arrow-filled] absolute right-[10px] top-1/2 transform -translate-y-1/2  text-[#E95520]/80 w-[24px] h-[24px] group-hover:text-[#fff] "
              }
            ></span>
          </NavLink>
        ))}
      </div>
    </HelmetProvider>
  );
};

export default Home;
