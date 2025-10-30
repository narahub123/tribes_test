import { Link } from "react-router-dom";
import { MainComu } from "../../../data";
import { ComuSectionHeader } from "../ComuSectionHeader";
import { SubComuCard } from "../SubComuCard";

export const SubComuSection = () => {
  const { title, comus } = MainComu.subComus;

  const filtered = comus.slice(0, 4);
  return (
    <section>
      <ComuSectionHeader title={title} />
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 py-4">
        {filtered.map((comu) => (
          <SubComuCard comu={comu} key={comu.id} />
        ))}
      </div>
      <div>
        <Link to="/comu/subs">
          <button className="w-full p-3 border border-blue-400 text-blue-400 hover:bg-blue-200 cursor-pointer hover:text-white">
            더보기
          </button>
        </Link>
      </div>
    </section>
  );
};
