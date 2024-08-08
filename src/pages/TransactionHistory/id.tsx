import { useContext, useEffect, useState } from "react";
// 組件
import InvoiceConfig from "../InvoiceConfig";
import OrderDetail from "../../components/TransactionHistory/orderDetail";
import Steps from "../../components/common/Steps";
// 型別
import { StepsType } from "./type";
// context
import { TitleContext } from "../../provider";

const TransactionHistoryId = () => {
  // context
  const { setTitle } = useContext(TitleContext);

  // 付款步驟狀態
  const [transactionStep, setTransactionStep] = useState<StepsType>("訂單資訊");

  // 初次渲染設定title
  useEffect(() => {
    setTitle(transactionStep);
  }, [setTitle, transactionStep]);

  const currentStep: Record<StepsType, number> = {
    訂單資訊: 1,
    發票設定: 2,
    付款資訊: 3,
    付款結果: 4,
  };

  return (
    <>
      {/* 步驟條 */}
      <Steps currentStep={currentStep[transactionStep]} />

      {/* 訂單資訊 */}
      <OrderDetail
        transactionState={{ transactionStep, setTransactionStep }}
        step="訂單資訊"
      ></OrderDetail>

      {/* 發票設定 */}
      <InvoiceConfig
        transactionState={{ transactionStep, setTransactionStep }}
        buttonText="下一步"
        className={`${transactionStep === "發票設定" ? "block" : "hidden"}`}
      ></InvoiceConfig>

      {/* 付款資訊 */}
      <OrderDetail
        transactionState={{ transactionStep, setTransactionStep }}
        buttonText="確認付款"
        invoice={{
          store: "個人載具",
          Info: { email: "h0989541162@gmail.com", phoneBarcode: "/VK.LT4S" },
        }}
        step="付款資訊"
      ></OrderDetail>
    </>
  );
};

export default TransactionHistoryId;
