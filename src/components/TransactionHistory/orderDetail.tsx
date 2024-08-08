import React, { useRef } from "react";
// router
import { useNavigate } from "react-router-dom";
// 型別
import { StepsType } from "../../pages/TransactionHistory/type";

interface OrderDetailType {
  step: string;
  buttonText?: string;
  transactionState: {
    transactionStep: StepsType;
    setTransactionStep: (step: StepsType) => void;
  };
  invoice?: {
    store: string;
    Info: { email: string; phoneBarcode: string };
  };
}

const OrderDetail: React.FC<OrderDetailType> = ({
  transactionState,
  buttonText,
  step,
  invoice,
}) => {
  // 動態路由
  const navigate = useNavigate();

  const { transactionStep, setTransactionStep } = transactionState;

  // 付款方式
  const selectedPaymentMethod = useRef("");

  // 提交
  const submit = () => {
    if (transactionStep === "訂單資訊") {
      setTransactionStep("發票設定");
    }

    if (transactionStep === "付款資訊") {
      console.log(selectedPaymentMethod);
      navigate("/PaymentResult", { replace: true });
    }
  };

  return (
    <div
      className={`flex-col items-center gap-[10px] ${
        transactionStep !== step ? "hidden" : "flex"
      }`}
    >
      {/* 訂單詳情 */}
      <div
        className={`w-full bg-[#fff] py-[10px] px-[30px] rounded-[10px] border-[2px] border-solid border-[#E95520]/40`}
      >
        {/* 標題 */}
        {!invoice && (
          <p className={`text-[24px] mb-[20px] text-center`}>
            繳費資料{" "}
            <span className={`text-[red]`}>
              (<span>未繳費</span>)
            </span>
          </p>
        )}

        {/* 標題 */}
        {invoice && (
          <p className={`text-[24px] mb-[20px] text-center`}>付款資訊 </p>
        )}

        {/* 訂單編號 */}
        <p className={`text-[20px] text-center`}>訂單編號: AC20240102</p>

        {/* 分隔線 */}
        <div
          className={`border-b border-solid border-[#E95520] my-[10px] m-[0_auto]`}
        ></div>

        {/* 進出場時間 */}
        <ul className={`flex justify-center gap-[25px]`}>
          <li className={`flex flex-col items-center`}>
            <p>2024.04.27</p>
            <p className={`text-[22px] text-[#E95520]`}>11:39</p>
          </li>
          <li className={`flex items-center`}>
            <span className="icon-[bxs--right-arrow] bg-[#9c9b9b]"></span>
          </li>
          <li className={`flex flex-col items-center gap-[5px]`}>
            <p>2024.04.27</p>
            <p className={`text-[22px] text-[#E95520]`}>11:39</p>
          </li>
        </ul>

        {invoice && (
          <>
            {/* 分隔線 */}
            <div
              className={`border-b border-solid border-[#E95520] my-[10px] m-[0_auto]`}
            ></div>
            {/* 發票載具 */}
            <ul className="flex justify-center m-[0_auto]">
              <li className={`w-full flex justify-between items-center`}>
                <p>發票載具</p>
                <div>
                  <p>{invoice.store}</p>
                  <p>{invoice.Info.phoneBarcode}</p>
                </div>
              </li>
            </ul>

            {/* 分隔線 */}
            <div
              className={`border-b border-solid border-[#E95520] my-[10px] m-[0_auto]`}
            ></div>
            {/* 付款方式 */}
            <ul className="flex justify-center m-[0_auto]">
              <li className={`w-full flex justify-between items-center`}>
                <p>付款方式</p>
                <div>
                  <div className={`flex items-center gap-[5px]`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="creditCard"
                      onChange={(event) =>
                        (selectedPaymentMethod.current = event.target.value)
                      }
                    />
                    <label htmlFor="creditCard">信用卡</label>
                  </div>
                  <div className={`flex items-center gap-[5px]`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="linePay"
                      onChange={(event) =>
                        (selectedPaymentMethod.current = event.target.value)
                      }
                    />
                    <label htmlFor="linePay">LinePay</label>
                  </div>
                </div>
              </li>
            </ul>
          </>
        )}

        {/* 分隔線 */}
        <div
          className={`border-b border-solid border-[#E95520] my-[10px] m-[0_auto]`}
        ></div>

        {/* 費用明細 */}
        <ul className="flex justify-center m-[0_auto]">
          <li className={`w-full flex justify-between items-center`}>
            <p>進場費用</p>
            <p>100</p>
          </li>
        </ul>

        {/* 分隔線 */}
        <div
          className={`border-b border-solid border-[#E95520] my-[10px] m-[0_auto]`}
        ></div>

        {/* 總計 */}
        <ul className="flex justify-center m-[0_auto] text-[20px]">
          <li className={`w-full flex justify-between text-[#E95520]`}>
            <p>總計</p>
            <p>100</p>
          </li>
        </ul>
      </div>

      {/* 下一步 */}
      <button
        onClick={submit}
        type="button" // Use type="button" to prevent unintended form submission
        className={`mt-[15px] bg-[#E95520]/80 w-full rounded-[5px] text-[#fff] p-[10px] text-[18px] hover:bg-[#E95520]`}
      >
        {buttonText ?? "下一步"}
      </button>

      {/* 返回交易紀錄 */}
      {transactionStep === "訂單資訊" && (
        <button
          onClick={() => navigate(-1)}
          type="button" // Use type="button" to prevent unintended form submission
          className={`mt-[15px] w-full rounded-[5px] text-[#E95520] p-[10px] text-[18px] border border-solid border-[#E95520] hover:bg-[#E95520] hover:text-[#fff]`}
        >
          返回交易紀錄
        </button>
      )}
    </div>
  );
};

export default OrderDetail;
