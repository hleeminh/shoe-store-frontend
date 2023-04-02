import { useState } from 'react';
import Wrapper from '@/components/Wrapper';
import Title from '@/components/Title';
import { fetcher } from '@/utils/apicus';
import { setToken, unsetToken } from '@/utils/auth';
import { useUser } from '@/utils/authContext';
import { API_URL } from '@/utils/urls';
import Link from 'next/link';
import { useFetchUser } from '@/utils/authContext';

const Login = () => {

  const { user, loading } = useFetchUser();

  const [data, setData] = useState({ 
    identifier: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const responseData = await fetcher(
      `${API_URL}/api/auth/local`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: data.identifier,
          password: data.password,
        }),
      }
    );
    setToken(responseData);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (   
    <>
    <Title title='Đăng nhập'/>
      <div className='flex items-center justify-center h-[700px]'>
        <Wrapper className='flex items-center justify-center'>
          {!loading && !user ? (
            <div className='flex flex-col items-center h-[450px] w-[370px] border-gray-200 border rounded-xl text-gray-700'>
            <div className='mt-8 text-2xl font-bold mb-10'>Đăng nhập</div>
            <form action="" className='flex flex-col gap-6' onSubmit={handleSubmit}>

              <div className='flex flex-col gap-1'>
                <label htmlFor="username" className='font-semibold mb-1'>Email:</label>
                <input 
                  required
                  type="email" 
                  className='border border-gray-200 outline-none rounded-xl w-[300px] h-[45px] px-4'
                  placeholder='abc@gmail.com'
                  name='identifier'                 
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
              <button
                type='submit'
                className='flex items-center justify-center text-white mt-8
                bg-blue-600 hover:bg-blue-500 border border-gray-200 outline-none rounded-xl w-[300px] h-[45px] px-4'
              >
                Đăng nhập
              </button>
            </form>
          </div> 
          ) : (
            ''
          )}         
        </Wrapper>
      </div>
      </>
  );
};

export default Login;