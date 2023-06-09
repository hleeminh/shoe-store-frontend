import Head from "next/head";
import Nav from "./Nav";
import { UserProvider } from "@/utils/authContext";

const Layout = ({ user, loading = false, children }) => (
  <UserProvider value={{ user, loading }}>
    <Nav />
    <main className="px-4">
      <div className="flex justify-center items-center bg-white mx-auto w-2/4 rounded-lg my-1 p-16" >
        <div>{children}</div>
      </div>
    </main>
  </UserProvider>
);
export default Layout;
