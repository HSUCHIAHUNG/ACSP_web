// 圖片
import frontQR from "../../assets/images/FixedContent/frontQR.png"

const LightBox = () => {
  return (
    <>
      {/* 燈箱-qr code正反掃 */}
      <div className={`flex gap-[4px] h-[94px]`}>
        {/* 反掃 */}
        <button className={`w-[50%] bg-[#E95520]/80 rounded-[5px] p-[10px]`}>
          <img src={frontQR} alt="點擊打開條碼" className={`w-[70px] h-full`} />
        </button>
        {/* 正掃 */}
        <button
          className={`w-[50%] bg-[#E95520]/80 rounded-[5px] p-[8px] text-left`}
        >
          <span className="icon-[tdesign--scan] text-[#fff] w-[70px] h-full "></span>
        </button>
      </div>
    </>
  )
}

export default LightBox
