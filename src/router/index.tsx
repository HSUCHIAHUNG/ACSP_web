import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import { lazy, Suspense } from "react";
import Loading from "../components/common/Loading";

const PrivateRouter = lazy(() => import("./PrivateRouter"));
const Error = lazy(() => import("../pages/Error"));
const MemberCenter = lazy(() => import("../pages/MemberCenter/index.tsx"));
const MemberProfile = lazy(() => import("../pages/MemberProfile"));
const PayConfigProfile = lazy(() => import("../pages/PayConfig"));
const InvoiceConfig = lazy(() => import("../pages/InvoiceConfig"));
const TransactionHistory = lazy(() => import("../pages/TransactionHistory"));
const TransactionHistoryId = lazy(
  () => import("../pages/TransactionHistory/id")
);
const PaymentResult = lazy(() => import("../pages/PaymentResult"));
const UserLayout = lazy(() => import("../layout/UserLayout.tsx"));
const Login = lazy(() => import("../pages/User/Login.tsx"));
const Forget = lazy(() => import("../pages/User/Forget.tsx"));
const Signup = lazy(() => import("../pages/User/Signup.tsx"));

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
      // 登入/註冊Layout
      {
        path: "/",
        element: <UserLayout />,
        children: [
          {
            path: "/",
            element: (
              <Suspense fallback={<Loading />}>
                <Login />
              </Suspense>
            ),
          },
          {
            path: "/forget",
            element: (
              <Suspense fallback={<Loading />}>
                <Forget />
              </Suspense>
            ),
          },
          {
            path: "/Signup",
            element: (
              <Suspense fallback={<Loading />}>
                <Signup />
              </Suspense>
            ),
          },
        ],
      },
      // DefaultLayout
      {
        path: "/",
        element: <DefaultLayout />,
        children: [
          // 首頁
          {
            path: "/memberCenter",
            element: (
              <Suspense fallback={<Loading />}>
                <MemberCenter />
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
          // 交易紀錄(動態路由)
          {
            path: "transactionHistory/:id",
            element: (
              <Suspense fallback={<Loading />}>
                <TransactionHistoryId />
              </Suspense>
            ),
          },
          // 付款結果
          {
            path: "paymentResult",
            element: (
              <Suspense fallback={<Loading />}>
                <PaymentResult />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
