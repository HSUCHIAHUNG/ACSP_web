import { useContext, useEffect } from "react";
// SEO
import { Helmet } from "react-helmet-async";
// context
import { TitleContext } from "../../provider";
// ui kit
import { Form, Input, Select } from "@arco-design/web-react";
// style
import "../../assets/memberProfile.css";
// json
import addressList from "../../data/address.json";

// ui kit
const FormItem = Form.Item;
const Option = Select.Option;

const MemberProfile = () => {
  // context
  const { setTitle } = useContext(TitleContext);

  // 初次渲染設定title
  useEffect(() => {
    setTitle("會員資料");
  }, [setTitle]);

  return (
    <>
      {/* 頁面title */}
      <Helmet>
        <title>會員資料</title>
      </Helmet>

      <div className={`memberProfile mt-[10px]`}>
        <Form layout="vertical">
          <FormItem label="手機號碼" field="phone" rules={[{ required: true }]}>
            <Input placeholder="請輸入手機號碼" />
          </FormItem>
          <FormItem label="電子郵件" field="mail" rules={[{ required: true }]}>
            <Input placeholder="請輸入電子郵件" />
          </FormItem>
          <div className={`flex gap-[10px]`}>
            <FormItem
              label="縣市"
              field="city"
              rules={[{ required: true }]}
              className={`!w-[50%]`}
            >
              <Select placeholder="選擇縣市">
                {addressList.map((option) => (
                  <Option key={option.city} value={option.city}>
                    {option.city}
                  </Option>
                ))}
              </Select>
            </FormItem>
            <FormItem
              label="鄉鎮市"
              field="area"
              rules={[{ required: true }]}
              className={`!w-[50%]`}
            >
              <Select placeholder="選擇鄉鎮市">
                {addressList.flatMap((cityData) =>
                  cityData.area.map((area) => (
                    <Option key={area} value={area}>
                      {area}
                    </Option>
                  ))
                )}
              </Select>
            </FormItem>
          </div>
          <FormItem label="地址" field="address" rules={[{ required: true }]}>
            <Input placeholder="請輸入地址" />
          </FormItem>
          <button
            className={`mt-[15px] bg-[#E95520]/80 w-full rounded-[5px] text-[#fff] p-[10px] text-[18px] hover:bg-[#E95520]`}
          >
            確認
          </button>
        </Form>
      </div>
    </>
  );
};

export default MemberProfile;
