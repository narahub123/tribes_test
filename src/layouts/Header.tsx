import { Link, NavLink } from "react-router-dom";
import { headerMenus } from "../data";
import { tribesLogo } from "../assets";

export const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-between p-4 items-center bg-white backdrop-blur shadow-md">
      <Link to="/">
        <img src={tribesLogo} alt="로고" className="w-50" />
      </Link>
      <nav className="flex-1 flex justify-around max-w-[535px]">
        {headerMenus.map((menu) => (
          <NavLink
            key={menu.path}
            to={menu.path}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold text-md" : ""
            }
          >
            {menu.name}
          </NavLink>
        ))}
        <button>로그인</button>
      </nav>
    </header>
  );
};
