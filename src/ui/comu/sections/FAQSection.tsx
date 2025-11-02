import { Link } from "react-router-dom";
import { faqs } from "../../../data";
import { ComuAccordian } from "../ComuAccordian";
import { ComuSectionHeader } from "../ComuSectionHeader";
import { FAQ_SECTION_NUMBER } from "../../../constants";

export const FAQSection = () => {
  const filtered = faqs.slice(0, FAQ_SECTION_NUMBER);

  return (
    <section>
      <ComuSectionHeader title={"FAQ"} className="text-blue-400" />
      <div>
        {filtered.map((f) => (
          <ComuAccordian item={f} key={f.id} />
        ))}
      </div>
      <div>
        <Link to="/faqs">
          <button className="w-full p-2 border border-blue-400 text-blue-400 cursor-pointer">
            더보기
          </button>
        </Link>
      </div>
    </section>
  );
};
