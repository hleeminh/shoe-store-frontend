import "@/styles/globals.css";
import Title from "@/components/Title";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import store from "@/store/store";
import { Provider } from "react-redux";
import { UserProvider } from "@/utils/authContext";
import { useUser } from "@/utils/authContext";
import { useFetchUser } from "@/utils/authContext";

export default function App({ Component, pageProps }) {
  
  const { user, loading } = useFetchUser();

  // console.log(user);
  console.log(loading);
  
  

  return (
      <UserProvider value={{ user, loading}}>
        <Provider store={store}>
          <Header user={user} loading={loading} />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </UserProvider>
  );
}
