import { useState } from 'react';
import { useRouter } from 'next/router';
import { setToken } from '@/utils/auth';
import { fetcher } from '@/utils/apicus';
import { API_URL } from '@/utils/urls';
import Wrapper from './Wrapper';
import Link from 'next/link';


const Register = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {   
      const responseData = await fetcher(
        `${API_URL}/api/auth/local/register`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: userData.email,
            password: userData.password,
            username: userData.username,
          }),
          method: 'POST',
        }
      );
      setToken(responseData);
      router.redirect('/profile');
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <>
      <div className='flex items-center justify-center h-[700px]'>
        <Wrapper className='flex items-center justify-center'>
          <div className='flex flex-col items-center h-[640px] w-[400px] border-gray-200 border rounded-xl text-gray-700'>
            <div className='mt-8 text-2xl font-bold mb-10'>Đăng ký</div>
            <form action="" className='flex flex-col gap-6' onSubmit={handleSubmit}>

              <div className='flex flex-col gap-1'>
                <label htmlFor="username" className='font-semibold mb-1'>Địa chỉ Email:</label>
                <input 
                  required
                  type="email" 
                  className='border border-gray-200 outline-none rounded-xl w-[300px] h-[45px] px-4'
                  placeholder='abc@gmail.com'
                  name='email'                 
                  onChange={(e) => {handleChange(e)}}
                />
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor="username" className='font-semibold mb-1'>Tên người dùng:</label>
                <input 
                  required
                  type="text" 
                  className='border border-gray-200 outline-none rounded-xl w-[300px] h-[45px] px-4'
                  placeholder='Nhập tên của bạn'
                  name='username'                 
                  onChange={(e) => {handleChange(e)}}
                />
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor="username" className='font-semibold mb-1'>Mật khẩu:</label>
                <input 
                  required
                  type="password" 
                  className='border border-gray-200 outline-none rounded-xl w-[300px] h-[45px] px-4'
                  placeholder='Nhập mật khẩu'
                  name='password'                 
                  onChange={(e) => {handleChange(e)}}
                />
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor="username" className='font-semibold mb-1'>Nhập lại mật khẩu:</label>
                <input 
                  required
                  type="password" 
                  className='border border-gray-200 outline-none rounded-xl w-[300px] h-[45px] px-4'
                  placeholder='Xác nhận lại mật khẩu'
                  name='password'                 
                  onChange={(e) => {handleChange(e)}}
                />
              </div>
              <button
                type='submit'
                className='flex items-center justify-center text-white mt-8
                bg-blue-600 hover:bg-blue-500 border border-gray-200 outline-none rounded-xl w-[300px] h-[45px] px-4'
              >
                Đăng ký
              </button>
            </form>
          </div>          
        </Wrapper>
      </div>
        {/* <div className="flex w-full">
        <div className="w-full bg-white border-2 rounded p-8 m-4 md:max-w-sm md:mx-auto flex flex-col justify-center items-center">
          <h2 className="md:text-3xl text-xl font-extrabold leading-tighter mb-4">
            Register
          </h2>
          <form
            onSubmit={handleSubmit}
            className="mb-4 md:flex md:flex-wrap md:justify-between"
          >
            <div className="flex flex-col mb-4 md:w-full">
              <label className="font-bold text-lg mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="border-2 py-2 px-3"
                type="text"
                name="username"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="flex flex-col mb-4 md:w-full">
              <label className="font-bold text-lg mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="border-2 py-2 px-3"
                type="email"
                name="email"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="flex flex-col mb-6 md:w-full">
              <label className="font-bold text-lg mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="border-2 py-2 px-3"
                type="password"
                name="password"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <button
              className="block bg-teal-400 text-lg rounded p-4 mx-auto"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>   */}
      </>
  );
};

export default Register;