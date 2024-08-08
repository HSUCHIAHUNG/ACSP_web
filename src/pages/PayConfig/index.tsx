import { useContext, useEffect } from "react";
// SEO
import { Helmet } from "react-helmet-async";
// context
import { TitleContext } from "../../provider";

const PayConfig = () => {
  // context
  const { setTitle } = useContext(TitleContext);

  // 初次渲染設定title
  useEffect(() => {
    setTitle("付款設定");
  }, [setTitle]);

  return (
    <>
      {/* 頁面title */}
      <Helmet>
        <title>付款設定</title>
      </Helmet>

      <div className="flex flex-col gap-[8px]">
        {/* 新增信用卡 */}
        <button
          className={`relative shadow-md flex items-center gap-[10px] text-[18px] bg-[#fff] px-[1rem] h-[64px] duration-200 rounded-[5px] group hover:bg-[#E95520]/80 hover:text-[#fff]`}
        >
          <span className="icon-[ic--round-add] text-[#E95520]/80 group-hover:text-[#fff]"></span>
          <span className="icon-[fontisto--credit-card] w-[30px] h-[30px] text-[#E95520]/80 group-hover:text-[#fff]"></span>
          <p className={` text-[14px]`}>新增信用卡</p>
        </button>

        {/* 已新增支付方式 */}
        <button
          className={`relative shadow-md bg-[#fff] h-[64px] px-[1rem] duration-200 rounded-[5px] group hover:bg-[#E95520]/80`}
        >
          <div
            className={` flex items-center gap-[10px] text-[18px] group-hover:text-[#fff] `}
          >
            <span className="icon-[el--ok-sign] text-[#E95520]/80 group-hover:text-[#fff]"></span>
            <span className="icon-[ri--line-line] text-[#E95520]/80 w-[30px] h-[30px] group-hover:text-[#fff]"></span>
            <div className={`flex flex-col items-start gap-[2px] text-[14px]`}>
              <p>VISA</p>
              <p>**** **** **** 1041</p>
            </div>
          </div>
          <span
            className={
              " icon-[weui--arrow-filled] absolute right-[10px] top-1/2 transform -translate-y-1/2  text-[#E95520]/80 w-[24px] h-[24px] group-hover:text-[#fff] "
            }
          ></span>
        </button>

        {/* 新增line pay */}
        <button
          className={` shadow-md flex items-center gap-[5px] ml-auto bg-[#fff] w-[150px] p-[10px] rounded-[5px] group hover:bg-[#E95520]/80 hover:text-[#fff]`}
        >
          <span className="icon-[ic--round-add] text-[#E95520]/80 group-hover:text-[#fff] "></span>
          <p>新增LINE PAY</p>
        </button>

        {/* 提醒訊息 */}
        <p className={`text-[#1d2945] text-[13px] pt-[5px]`}>
          為確認您的卡片有效，註冊卡片時，系統將自動試刷NT$2
          ，並立刻退還。未來，將自動儲存您的付款方式，不再進行預授權。
        </p>
      </div>
    </>
  );
};

export default PayConfig;
