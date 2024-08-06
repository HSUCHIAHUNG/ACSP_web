import React, { useState, useEffect } from "react"
import { CSSTransition } from "react-transition-group"

const Loading: React.FC = () => {
  const [showLoading, setShowLoading] = useState(false)
  const nodeRef = React.useRef(null)
  useEffect(() => {
    setShowLoading(true)
  }, [])

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={showLoading}
      timeout={50}
      classNames={"loading"}
      unmountOnExit
    >
      <div className={`ointer-events-none fixed inset-0 z-99 h-full w-full flex flex-col items-center justify-center`}>
        <div className="la-ball-spin-clockwise la-2x">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="pt-[20px] text-[#E95520] text-[24px] font-bold">Loading...</p>
      </div>
    </CSSTransition>
  )
}

export default Loading
