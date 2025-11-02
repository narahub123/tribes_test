import { useEffect, useState } from "react";
import type { HeroType } from "../../../types";
import { useComuContext } from "../../../contexts";
import { comus } from "../../../data";

export const HeroSection = () => {
  // 배경 이미지와 텍스트 필요
  const { comuId } = useComuContext();
  const [hero, setHero] = useState<HeroType>();

  useEffect(() => {
    const hero = comus.filter((c) => c.id === comuId)[0].hero;

    setHero(hero);
  }, [comuId]);

  if (!hero) return null;

  const { imgUrl, title, desc } = hero;

  return (
    <section className="w-full relative mb-8">
      <img src={imgUrl} alt="" className="w-full brightness-70" />
      <div className="absolute top-[50%] left-[50%] transform translate-[-50%] flex flex-col items-center text-white gap-5">
        <p className="text-2xl font-bold">{title}</p>
        <p>{desc}</p>
      </div>
    </section>
  );
};
