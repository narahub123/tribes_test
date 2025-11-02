import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  CommunitySection,
  LeaderSection,
  LeadershipSection,
  NoticeSection,
  ReviewSection,
  ComuProfileSection,
  ScheduleSection,
  ActivitySection,
  BookSection,
  ArchiveSection,
} from "../ui";
import { ComuProvider } from "../contexts";
import { ApplyButton, ApplyModal } from "../ui/comu/subComu";

export const SubComuLayout = () => {
  const { pathname } = useLocation();
  const [comuId, setComuId] = useState("comu1");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!pathname) return;

    const comuId = pathname.includes("subs/")
      ? pathname.split("subs/")[1]
      : "comu1";
    setComuId(comuId);
  }, [pathname]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <ApplyModal isOpen={isOpen} onClose={handleClose} />
      <div className="flex justify-center">
        <h2 className="font-bold text-2xl p-4">서브 커뮤</h2>
      </div>

      <ComuProvider value={{ comuId }}>
        <LeaderSection />
        <LeadershipSection />
        <ComuProfileSection />
        <NoticeSection />
        <ReviewSection />
        <CommunitySection />
        <ScheduleSection />
        <ActivitySection />
        <BookSection />
        <ArchiveSection />
        <ApplyButton onClick={handleToggle} />
      </ComuProvider>
    </div>
  );
};
