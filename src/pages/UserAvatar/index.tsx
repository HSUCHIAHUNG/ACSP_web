// router
import { useLocation } from "react-router-dom";
// ui kit
import { Avatar, Message } from "@arco-design/web-react";
import { IconCamera } from "@arco-design/web-react/icon";
import LightBox from "../../components/common/LightBox";
// 圖片
import usePhoto from "../../assets/images/Header/userPhoto.jpeg";
import { useEffect, useState } from "react";

const FixedContent = () => {
  // 目前路由
  const location = useLocation();
  const { pathname } = location;

  // 目前路由State
  const [currentPath, setCurrentPath] = useState("");

  // 依照路由控制顯示元素
  const lightboxIsHidden = currentPath === "/payConfig";

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <div className={` ${currentPath === "/transactionHistory" && "hidden"}`}>
      {/* 頭像、姓名 */}
      <div className={`flex gap-[10px] my-[10px]`}>
        <Avatar
          triggerIcon={<IconCamera />}
          triggerIconStyle={{
            color: "#E95520",
          }}
          onClick={() => Message.info("Upload...")}
          className={`!w-[56px] !h-[56px]`}
        >
          <img src={usePhoto} alt="使用者照片" />
        </Avatar>

        {/* 姓名資料 */}
        <div className={``}>
          <p className={`text-[16px]`}>Hello, Amelie</p>
          <p className={`text-[#646464]`}>Have a nice day !</p>
        </div>
      </div>

      {/* 燈箱-qr正反掃 */}
      {!lightboxIsHidden && <LightBox />}
    </div>
  );
};

export default FixedContent;
