// SEO
import { Helmet } from "react-helmet-async";
// hook
import { usePageTitle } from "../../hook";

const Login = () => {
  usePageTitle("會員登入");

  return (
    <>
      <Helmet>
        <title>會員登入</title>
      </Helmet>
      <div>Login</div>
    </>
  );
};

export default Login;
