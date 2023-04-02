import { useFetchUser } from "@/utils/authContext";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import { useState } from "react";
import { setToken } from "@/utils/auth";
import { fetcher } from "@/utils/apicus";
import { API_URL } from "@/utils/urls";
import Wrapper from "@/components/Wrapper";


const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseData = await fetcher(`${API_URL}/api/auth/local/register`, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userData.email,
          password: userData.password,
          username: userData.username,
        }),
        method: "POST",
      });
      setToken(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const { user, loading } = useFetchUser();

  console.log(user);
  
  return (
    <>
      <Title title="Đăng ký" />
      {/* <Layout user={user} loading={loading}> */}
        {/* <RegisterComponent /> */}
        <div className="flex items-center justify-center h-[700px]">
          <Wrapper className="flex items-center justify-center">
            <div className="flex flex-col items-center h-[640px] w-[370px] border-gray-200 border rounded-xl text-gray-700">
              <div className="mt-8 text-2xl font-bold mb-10">Đăng ký</div>
              <form
                action=""
                className="flex flex-col gap-6"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-1">
                  <label htmlFor="username" className="font-semibold mb-1">
                    Email:
                  </label>
                  <input
                    required
                    type="email"
                    className="border border-gray-200 outline-none rounded-xl w-[300px] h-[45px] px-4"
                    placeholder="abc@gmail.com"
                    name="email"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="username" className="font-semibold mb-1">
                    Tên người dùng:
                  </label>
                  <input
                    required
                    type="text"
                    className="border border-gray-200 outline-none rounded-xl w-[300px] h-[45px] px-4"
                    placeholder="Nhập tên của bạn"
                    name="username"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="username" className="font-semibold mb-1">
                    Mật khẩu:
                  </label>
                  <input
                    required
                    type="password"
                    className="border border-gray-200 outline-none rounded-xl w-[300px] h-[45px] px-4"
                    placeholder="Nhập mật khẩu"
                    name="password"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="username" className="font-semibold mb-1">
                    Nhập lại mật khẩu:
                  </label>
                  <input
                    required
                    type="password"
                    className="border border-gray-200 outline-none rounded-xl w-[300px] h-[45px] px-4"
                    placeholder="Xác nhận lại mật khẩu"
                    name="password"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center text-white mt-8
                bg-blue-600 hover:bg-blue-500 border border-gray-200 outline-none rounded-xl w-[300px] h-[45px] px-4"
                >
                  Đăng ký
                </button>
              </form>
            </div>
          </Wrapper>
        </div>
      {/* </Layout> */}
    </>
  );
};

export default Register;
