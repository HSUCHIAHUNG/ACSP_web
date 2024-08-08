import React from "react";

interface StepsProps {
  currentStep: number;
}

const Steps: React.FC<StepsProps> = ({ currentStep }) => {
  // 交易紀錄付款流程
  const transactionStepsList = [
    { id: 1, subtitle: "訂單資訊" },
    { id: 2, subtitle: "發票設定 " },
    { id: 3, subtitle: "付款資訊" },
    { id: 4, subtitle: "付款結果" },
  ];

  return (
    <ul className={` w-[90%] mt-[40px] mb-[60px] flex m-[0_auto] `}>
      {transactionStepsList.map((step) => (
        <li
          key={step.id}
          className={` relative flex flex-col ${
            step.subtitle === "付款結果" ? "" : " w-full "
          }`}
        >
          <div className={` flex items-center`}>
            <div
              className={`w-[10px] h-[10px]  rounded-full ${
                step.id <= currentStep ? "bg-[#E95520]/80" : "bg-[#c2c2c2]"
              }`}
            ></div>
            <div
              className={`w-full ssm h-[1px] bg-[#E95520]/80 ${
                step.subtitle === "付款結果" ? "hidden" : "block"
              } ${step.id < currentStep ? "bg-[#E95520]/80" : "bg-[#c2c2c2]"}`}
            ></div>
          </div>
          <div className={`absolute top-[10px] left-[-20px] break-keep  `}>
            {step.subtitle}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Steps;
