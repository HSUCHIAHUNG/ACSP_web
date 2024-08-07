import Steps from "../../components/common/Steps";

const PaymentResult = () => {
  return (
    <>
      {/* 步驟條 */}
      <Steps />

      {/* 訂單詳情 */}
      <div
        className={`w-full bg-[#fff] py-[20px] px-[30px] rounded-[10px] border-[2px] border-solid border-[#E95520]/40`}
      >
        {/* 標題 */}
        {<p className={`text-[28px] text-center mb-[20px]`}>繳費完成 </p>}
        {/* 訂單編號 */}
        <p className={`text-[20px] text-center`}>訂單編號: AC20240102</p>

        {/* 分隔線 */}
        <div
          className={`border-b border-solid border-[#E95520] my-[10px] m-[0_auto]`}
        ></div>
        {/* 最晚可離場時間 */}
        <ul className={`flex flex-col items-center gap-[5px]`}>
          <li className={`text-[20px]`}>最晚可離場時間</li>
          <li className={`flex flex-col items-center text-[20px]`}>
            <p>2024.04.27</p>
            <p className={` text-[#E95520]`}>11:39</p>
          </li>
        </ul>

        {/* 分隔線 */}
        <div
          className={`border-b border-solid border-[#E95520] my-[10px] m-[0_auto]`}
        ></div>
        {/* 歡迎再次光臨 */}
        <p className={`text-center text-[#757575]`}>歡迎再次光臨</p>
      </div>
    </>
  );
};

export default PaymentResult;
