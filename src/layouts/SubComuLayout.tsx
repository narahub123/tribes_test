import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SubComuProvider } from "../ui/comu/subComu";
import type { SubComuType } from "../types";
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
import { subComus } from "../data";

export const SubComuLayout = () => {
  const { pathname } = useLocation();
  const [subComu, setSubComu] = useState<SubComuType>({});

  useEffect(() => {
    const comuId = pathname.split("subs/")[1];
    // 실제로 백엔드에서 불러오기

    // 현재는 data에서 가져오기
    setSubComu(subComus[comuId]);
  }, [pathname]);

  return (
    <div>
      <div className="flex justify-center">
        <h2 className="font-bold text-2xl p-4">서브 커뮤</h2>
      </div>
      <SubComuProvider value={subComu}>
        <LeaderSection />
        <LeadershipSection />
        <OriginSection />
        <VisionSection />
        <MissionSection />
        <NoticeSection />
        <ReviewSection />
        <CommunitySection />
      </SubComuProvider>
    </div>
  );
};
