// router
import { useNavigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate()
  const webTitle = document.title

  return (
    <div
      className={` fixed z-50 top-0 left-0 right-0 shadow-md flex justify-center items-center px-[1rem] leading-[34px] ssm:px-[2rem] bg-[#fff]  h-[60px]`}
    >
      <button
        onClick={() => navigate("/")}
        className={` flex flex-row-reverse justify-end item-center w-[515px] leading-[34px] m-[0_auto] text-[18px] gap-[5px] `}
      >
        <p>{webTitle}</p>
        <div
          className={`icon-[basil--arrow-left-outline] w-[34px] h-[34px] text-[#E95520] hover:translate-x-[-5px] duration-300 ${
            webTitle === "會員中心" && "hidden"
          }`}
        ></div>
      </button>
    </div>
  )
}

export default Header
