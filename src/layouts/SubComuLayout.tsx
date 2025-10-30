import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  CommunitySection,
  LeaderSection,
  LeadershipSection,
  MissionSection,
  NoticeSection,
  OriginSection,
  ReviewSection,
  VisionSection,
} from "../ui";

export const SubComuLayout = () => {
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
    <div>
      <div className="flex justify-center">
        <h2 className="font-bold text-2xl p-4">서브 커뮤</h2>
      </div>

      <LeaderSection comuId={comuId} />
      <LeadershipSection comuId={comuId} />
      <OriginSection />
      <VisionSection />
      <MissionSection />
      <NoticeSection />
      <ReviewSection />
      <CommunitySection />
    </div>
  );
};
