import { useContext } from "react";
// router
import { useNavigate, useLocation } from "react-router-dom";
// context
import { TitleContext } from "../../provider/TitleProvider";
// 組件
// import QrScanner from "../common/QrScanner";

const Header = () => {
  // 動態路由
  const navigate = useNavigate();

  // 目前頁面
  const location = useLocation();

  // context
  const { title } = useContext(TitleContext);

  // 不能使用上一頁的頁面
  const excludedPaths = [
    "transactionHistory/",
    "PaymentResult",
    "forget",
    "signup",
  ];
  const prevPageActive =
    !excludedPaths.some((path) =>
      location.pathname.toLowerCase().includes(path.toLowerCase())
    ) &&
    title !== "會員中心" &&
    title !== "會員登入";

  // 路由導向
  const navigateHandler = () => {
    if (prevPageActive) navigate("/memberCenter");
  };

  return (
    <div
      className={` fixed z-50 top-0 left-0 right-0 shadow-md flex justify-center items-center px-[1rem] leading-[34px] ssm:px-[2rem] bg-[#fff]  h-[60px]`}
    >
      <div className={` w-[515px] m-[0_auto]  `}>
        <button
          onClick={navigateHandler}
          className={` flex flex-row-reverse justify-end item-center text-[18px] gap-[5px] leading-[34px] group `}
        >
          <p>{title}</p>
          <div
            className={`icon-[basil--arrow-left-outline] w-[34px] h-[34px] text-[#E95520] group-hover:translate-x-[-5px] duration-300 ${
              !prevPageActive && "hidden"
            }`}
          ></div>
        </button>
      </div>
      {/* <QrScanner /> */}
    </div>
  );
};

export default Header;
