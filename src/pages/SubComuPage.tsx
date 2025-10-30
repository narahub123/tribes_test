import { subComus } from "../data";
import { PrevButton, SubComuCard } from "../ui";

export const SubComuPage = () => {
  return (
    <div className="p-4">
      <header className="relative">
        <h2 className="font-bold text-3xl text-center">Sub Comu</h2>
        <PrevButton className="absolute top-2 left-0" />
      </header>
      <main>
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 py-4">
          {subComus.map((comu) => (
            <SubComuCard comu={comu} key={comu.id} />
          ))}
        </div>
      </main>
    </div>
  );
};
