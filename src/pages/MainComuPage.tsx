import { PrevButton } from "../ui";

export const MainComuPage = () => {
  return (
    <div className="p-4">
      <div className="relative">
        <h2 className="font-bold text-3xl text-center">메인 커뮤</h2>
        <PrevButton className="absolute top-2 left-0" />
      </div>
      <div></div>
    </div>
  );
};
