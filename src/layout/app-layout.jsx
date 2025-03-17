import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen mx-auto max-w-7xl px-4">
        <Header />
        <Outlet />
      </main>
      {/* <div className="p-10 text-center bg-gray-800 mt-10 flex items-center gap-2">
        <img src="/logo.png" width={100} height={100} alt="" />
        <p>Find Your Dream Job and get placed</p>
      </div> */}
    </div>
  );
};

export default AppLayout;
