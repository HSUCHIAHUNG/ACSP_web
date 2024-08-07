// SEO
import { HelmetProvider, Helmet } from "react-helmet-async";
// ui kit
import { Button, Form, Input } from "@arco-design/web-react";
// css
import "../../assets/invoiceConfig.css";
import { useState } from "react";

// ui kit
const FormItem = Form.Item;

interface InvoiceConfigType {
  className: string;
  buttonText: string;
  transactionState?: {
    transactionStep: string;
    setTransactionStep: (step: string) => void;
  };
}

const InvoiceConfig: React.FC<InvoiceConfigType> = ({
  buttonText,
  className,
  transactionState,
}) => {
  // 發票設定選項
  const [invoiceType, setInvoiceType] = useState("個人載具");

  // 發票設定項目
  const invoiceConfigList = [
    "個人載具",
    "三聯電子發票",
    "捐贈發票",
    "信用卡載具",
  ];

  // 送出表單
  const submit = (val) => {
    // 訂單紀錄階段
    if (transactionState) {
      const { transactionStep, setTransactionStep } = transactionState;
      if (transactionStep === "發票設定") setTransactionStep("付款資訊");
    }
    console.log(val);
  };

  return (
    <div className={`${className}`}>
      <HelmetProvider>
        {/* 頁面title */}
        <Helmet>
          <title>發票設定</title>
        </Helmet>

        {/* 標題-發票設定 */}
        <div
          className={` flex gap-[10px] text-[18px] leading-[25px] my-[15px] `}
        >
          <div className={`  w-[2px] h-[25px] bg-[#E95520]`}></div>
          <p>發票設定</p>
        </div>

        {/* 選擇發票儲存方式 */}
        <div className={`flex flex-wrap  gap-[5px] `}>
          {invoiceConfigList.map((item) => (
            <button
              key={item}
              onClick={() => setInvoiceType(item)}
              className={` bg-[#E95520]/80 w-[49%] h-[32px] rounded-[5px] hover:!bg-[#E95520]`}
            >
              <div
                className={`flex items-center justify-center gap-[5px] text-[#fff] text-center leading-[32px] `}
              >
                <span
                  className={`icon-[el--ok-sign] ${
                    invoiceType === item ? "block" : "hidden"
                  } `}
                ></span>
                <p>{item}</p>
              </div>
            </button>
          ))}
        </div>

        {/* 標題-發票資訊 */}
        <div
          className={` flex gap-[10px] text-[18px] leading-[25px] my-[15px] `}
        >
          <div className={`  w-[2px] h-[25px] bg-[#E95520]`}></div>
          <p>發票資訊</p>
        </div>

        <div className={`invoiceConfig `}>
          <Form layout="vertical" onSubmit={submit}>
            <FormItem label="EMAIL" field="phoneBarcode">
              <Input placeholder="請輸入EMAIL" />
            </FormItem>

            {invoiceType === "個人載具" && (
              <FormItem label="個人載具" field="phoneBarcode">
                <Input placeholder="請輸入個人載具" />
              </FormItem>
            )}

            {invoiceType === "捐贈發票" && (
              <FormItem label="捐贈發票" field="donateUnit">
                <Input placeholder="請輸入捐贈單位" />
              </FormItem>
            )}

            {invoiceType === "三聯電子發票" && (
              <>
                <FormItem label="公司名稱" field="companyName">
                  <Input placeholder="請輸入公司名稱" />
                </FormItem>

                <FormItem label="統一編號" field="taxIdNumber">
                  <Input placeholder="請輸入統一編號" />
                </FormItem>
              </>
            )}

            <p className={`mb-[15px]`}>
              提醒您ooo將依照您填寫的發票資訊，開立交易發票。若需修改發票資訊，建議您交易前修改本頁資料。
            </p>

            <Button
              htmlType="submit"
              className={`!bg-[#E95520]/80 !text-[#fff] hover:!bg-[#E95520]`}
            >
              {buttonText || "確認"}
            </Button>
          </Form>
        </div>
      </HelmetProvider>
    </div>
  );
};

export default InvoiceConfig;
