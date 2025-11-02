import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  TrackerSection,
  MemberSection,
  Icon,
  ProgramInfoSection,
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
      <div className="flex justify-center relative">
        <h2 className="font-bold text-2xl p-4">서브 커뮤</h2>

        <Link to="/comu/main">
          <button
            className="text-2xl absolute top-5 left-4 cursor-pointer"
            title="메인 코뮤로"
          >
            <Icon name="left" />
          </button>
        </Link>
      </div>

      <ComuProvider value={{ comuId }}>
        <LeaderSection />
        <LeadershipSection />
        <ComuProfileSection />
        <ProgramInfoSection />
        <BookSection />
        <ScheduleSection />
        <NoticeSection />
        <ReviewSection />
        <ActivitySection />
        <CommunitySection />
        <MemberSection />
        <TrackerSection />
        <ArchiveSection />
        <ApplyButton onClick={handleToggle} />
      </ComuProvider>
    </div>
  );
};
