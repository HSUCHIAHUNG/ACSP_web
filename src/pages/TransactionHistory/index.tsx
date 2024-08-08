// SEO
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
// json
import TransactionHistoryList from "../../data/transactionHistory.json";
import { Link } from "react-router-dom";
// context
import { TitleContext } from "../../provider";

const TransactionHistory = () => {
  // context
  const { setTitle } = useContext(TitleContext);

  // 交易紀錄目前日期區間
  const [selectDateRange, setSelectDateRange] = useState("近一個月");

  // 初次渲染設定title
  useEffect(() => {
    setTitle("交易紀錄");
  }, [setTitle]);

  // 發票設定項目
  const invoiceConfigList = ["近一個月", "近三個月", "近六個月"];

  return (
    <>
      <Helmet>
        <title>交易紀錄</title>
      </Helmet>
      {/* 選擇發票儲存方式 */}
      <div className={`flex gap-[5px] my-[20px] `}>
        {invoiceConfigList.map((item) => (
          <button
            key={item}
            onClick={() => setSelectDateRange(item)}
            className={` w-[33.3%] h-[32px] shadow-md rounded-[5px] group hover:bg-[#E95520]/80  ${
              selectDateRange === item ? "!bg-[#E95520]/80" : "bg-[#fff]"
            }  `}
          >
            <div
              className={`flex items-center justify-center text-center leading-[32px] group-hover:text-[#fff]
                  `}
            >
              <p
                className={` ${
                  selectDateRange === item ? "!text-[#fff]" : ""
                } `}
              >
                {item}
              </p>
              <span
                className={`icon-[weui--arrow-filled] w-[20px] h-[20px] group-hover:text-[#fff] ${
                  selectDateRange === item ? "!text-[#fff]" : "text-[#E95520]"
                } `}
              ></span>
            </div>
          </button>
        ))}
      </div>

      {/* 發票紀錄項目 */}
      <div className={`flex flex-col gap-[10px]`}>
        {TransactionHistoryList.map((item) => (
          <Link
            to={`${item.id}`}
            key={item.id}
            className={` flex justify-between items-center border border-solid border-[#E95520]/40 rounded-[5px] p-[20px] bg-[#fff] shadow-md group hover:bg-[#E95520]/80 hover:text-[#fff]`}
          >
            <div>
              <p>進場 : {item.check_in}</p>
              <p>出場 : {item.check_out}</p>
            </div>
            <p
              className={` group-hover:text-[#fff] ${
                item.payment_status === "已繳費"
                  ? "text-[#0000E3]"
                  : "text-[red]"
              }`}
            >
              {item.payment_status}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default TransactionHistory;
