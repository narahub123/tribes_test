import { useLocation } from "react-router-dom";
import {
  ReviewSection,
  CommunitySection,
  LeaderSection,
  LeadershipSection,
  MissionSection,
  NoticeSection,
  OriginSection,
  PrevButton,
  VisionSection,
  SubComuSection,
} from "../ui";
import { useEffect, useState } from "react";
import { ComuProvider } from "../contexts";

export const MainComuPage = () => {
  const { pathname } = useLocation();
  const [comuId, setComuId] = useState("comu1");

  useEffect(() => {
    if (!pathname) return;

    const comuId = pathname.includes("subs/")
      ? pathname.split("subs/")[1]
      : "comu1";
    setComuId(comuId);
  }, [pathname]);
  return (
    <div className="p-4">
      <header className="relative">
        <h2 className="font-bold text-3xl text-center">메인 커뮤</h2>
        <PrevButton className="absolute top-2 left-0" />
      </header>
      <main>
        <ComuProvider value={{ comuId }}>
          <LeaderSection />
          <LeadershipSection />
          <OriginSection />
          <VisionSection />
          <MissionSection />
          <NoticeSection />
          <CommunitySection />
          <ReviewSection />
          <SubComuSection />
        </ComuProvider>
      </main>
    </div>
  );
};
