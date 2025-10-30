import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="max-w-[1200px] border-r border-l h-screen m-auto">
      <Outlet />
    </div>
  );
};
