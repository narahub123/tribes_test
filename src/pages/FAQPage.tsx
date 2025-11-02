import { faqs } from "../data";
import { ComuAccordian, PrevButton } from "../ui";

export const FAQPage = () => {
  return (
    <div>
      <header className="relative flex justify-center">
        <PrevButton className="absolute text-2xl top-5 left-4" />
        <p className="p-4 text-2xl font-bold">FAQ</p>
      </header>
      <main>
        {faqs.map((f) => (
          <ComuAccordian item={f} key={f.id} />
        ))}
      </main>
    </div>
  );
};
