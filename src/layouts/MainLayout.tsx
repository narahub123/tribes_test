import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header } from "../layouts";
import { useEffect } from "react";

export const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
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
