import { Outlet } from "react-router-dom";
import { Footer, Header } from "../layouts";

export const MainLayout = () => {
  return (
    <div className="max-w-[1200px] border-r border-l h-screen m-auto">
      <Header />
      <div className="h-[66.3px]"></div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
