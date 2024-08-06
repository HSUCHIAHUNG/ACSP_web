import { createBrowserRouter, RouterProvider } from "react-router-dom"
import DefaultLayout from "../layout/DefaultLayout"
import { lazy, Suspense } from "react"
import Loading from "../components/common/Loading"

const PrivateRouter = lazy(() => import("./PrivateRouter"))
const Error = lazy(() => import("../pages/Error"))
const Home = lazy(() => import("../pages/Home"))
const MemberProfile = lazy(() => import("../pages/MemberProfile"))
const PayConfigProfile = lazy(() => import("../pages/PayConfig"))
const InvoiceConfig = lazy(() => import("../pages/InvoiceConfig"))
const TransactionHistory = lazy(() => import("../pages/TransactionHistory"))

const routes = [
  {
    path: "*",
    element: (
      <Suspense fallback={<Loading />}>
        <Error />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <PrivateRouter />
      </Suspense>
    ),
    children: [
      // DefaultLayout
      {
        path: "/",
        element: <DefaultLayout />,
        children: [
          // 首頁
          {
            path: "/",
            element: (
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            ),
          },
          // 會員資料
          {
            path: "/memberProfile",
            element: (
              <Suspense fallback={<Loading />}>
                <MemberProfile />
              </Suspense>
            ),
          },
          // 付款設定
          {
            path: "/payConfig",
            element: (
              <Suspense fallback={<Loading />}>
                <PayConfigProfile />
              </Suspense>
            ),
          },
          // 發票設定
          {
            path: "/invoiceConfig",
            element: (
              <Suspense fallback={<Loading />}>
                <InvoiceConfig />
              </Suspense>
            ),
          },
          // 交易紀錄
          {
            path: "/transactionHistory",
            element: (
              <Suspense fallback={<Loading />}>
                <TransactionHistory />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]

const router = createBrowserRouter(routes)

const Routes = () => {
  return <RouterProvider router={router} />
}

export default Routes
