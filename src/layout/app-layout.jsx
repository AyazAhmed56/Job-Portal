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
    </div>
  );
};

export default AppLayout;
