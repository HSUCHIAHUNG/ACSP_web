import { useEffect, useRef, useState } from "react"
// router
import { Outlet, useLocation } from "react-router-dom"
// 組件
import Header from "../components/layout/Header"
import FixedContent from "../pages/UserAvatar/index.tsx"
import { CSSTransition } from "react-transition-group"

function DefaultLayout() {
  // 當前路由
  const { pathname } = useLocation()

  // 控制 Loading 顯示的狀態
  const [isLoading, setIsLoading] = useState(true)

  // 使用useRef避免CSSTransition的錯誤訊息
  const nodeRef = useRef(null)

  // 切換路由讓頁面保持在最上方
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // 監聽路由變化，顯示 Loading 並設定 0.3 秒後隱藏
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [location.pathname])
  
  return (
    <div className=" min-h-[100vh] w-full m-[0_auto] ssm:w-[579px] ">
      <Header />
      <div className="flex-1 relative pt-[62px] pb-[40px] px-[1rem] ssm:px-[2rem] ">
        <FixedContent></FixedContent>
        <CSSTransition
          nodeRef={nodeRef}
          in={isLoading}
          timeout={300}
          classNames={"fade"}
          unmountOnExit={false}
        >
          <Outlet />
        </CSSTransition>
      </div>
    </div>
  )
}

export default DefaultLayout
