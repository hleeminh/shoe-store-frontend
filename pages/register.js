import { useFetchUser } from '@/utils/authContext';
import Layout from '@/components/Layout';
import { default as RegisterComponent } from '../components/Register';
import Title from '@/components/Title';

const Register = () => {
  const { user, loading } = useFetchUser();
  return (
    <>
      <Title title='Đăng ký'/>
      {/* <Layout user={user}> */}
        <RegisterComponent />
      {/* </Layout> */}
    </>
  );
};

export default Register;