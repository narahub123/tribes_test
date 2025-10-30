import { Link } from "react-router-dom";

export const ComuPage = () => {
  return (
    <div className="w-full p-4">
      <h2 className="text-center font-bold text-3xl">코뮤 페이지</h2>
      <Link to="main">
        <button className="bg-blue-400 py-2 px-4 rounded-3xl text-white">
          메인 커뮤
        </button>
      </Link>
    </div>
  );
};
