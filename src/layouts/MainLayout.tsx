import { Outlet } from "react-router-dom";
import { Footer, Header } from "../layouts";

export const MainLayout = () => {
  return (
    <div className="max-w-[1200px] inset-0 m-auto shadow-2xl">
      <Header />
      <div className="h-[66.3px]"></div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
