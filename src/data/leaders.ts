import { leader1, leader2, leader3, leader4 } from "../assets";
import type { Leader } from "../types";

export const leaders: Leader[] = [
  {
    id: "leader1",
    avatarUrl: leader1,
    name: "장주영",
    role: "커뮤니티 운영자",
    job: "설립자 & 메인 퍼실리테이터",
    education: ["서울대학교 사회학과 학사", "하버드대학교 커뮤니티 개발 석사"],
    careerHistory: [
      {
        company: "SocialImpact Lab",
        position: "프로그램 매니저",
        duration: "2015-2018",
      },
      {
        company: "Global Youth Network",
        position: "커뮤니티 리드",
        duration: "2018-현재",
      },
    ],
    socials: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/alexkim" },
      { platform: "Twitter", url: "https://twitter.com/alexkim" },
    ],
    beliefs: [
      "작은 그룹의 힘이 큰 변화를 만든다고 믿습니다.",
      "모든 구성원은 각자의 전문성과 열정을 발휘할 수 있어야 합니다.",
      "공동체 내에서 학습과 성장을 촉진하는 환경을 만드는 것을 중요하게 생각합니다.",
    ],
  },
  {
    id: "leader2",
    avatarUrl: leader1,
    name: "박수진",
    role: "멘토",
    job: "리더십 & 전략 컨설턴트",
    education: ["연세대학교 경영학과 학사", "스탠포드대학교 경영대학원 MBA"],
    careerHistory: [
      {
        company: "BrightFuture Consulting",
        position: "전략 컨설턴트",
        duration: "2014-2019",
      },
      {
        company: "NextGen Leaders",
        position: "리더십 코치",
        duration: "2019-현재",
      },
    ],
    socials: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/soojinpark" },
    ],
    beliefs: [
      "리더는 구성원의 성장을 지원하는 서번트 리더십을 실천해야 합니다.",
      "공동체의 목표가 개인의 목표와 연결될 때 진정한 몰입이 생깁니다.",
    ],
  },
  {
    id: "leader3",
    avatarUrl: leader4,
    name: "이민호",
    role: "콘텐츠 전략가",
    job: "저자 & 워크숍 퍼실리테이터",
    education: ["고려대학교 심리학과 학사", "UC Berkeley 교육학 석사"],
    careerHistory: [
      {
        company: "Creative Minds",
        position: "워크숍 디자이너",
        duration: "2013-2017",
      },
      {
        company: "Learning Tribe",
        position: "콘텐츠 총괄",
        duration: "2017-현재",
      },
    ],
    socials: [
      { platform: "Instagram", url: "https://instagram.com/minholee" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/minholee" },
    ],
    beliefs: [
      "학습과 성장은 사람과 사람 사이의 연결 속에서 이루어진다고 믿습니다.",
      "작은 실천과 공유가 커다란 혁신을 만들어냅니다.",
    ],
  },
  {
    id: "leader4",
    avatarUrl: leader3,
    name: "정하은",
    role: "조직 문화 전문가",
    job: "HR 컨설턴트 & 코치",
    education: ["한양대학교 경영학과 학사", "MIT 조직행동학 석사"],
    careerHistory: [
      {
        company: "PeopleFirst",
        position: "조직문화 컨설턴트",
        duration: "2012-2016",
      },
      { company: "TribeWorks", position: "문화 전략가", duration: "2016-현재" },
    ],
    socials: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/haeunjung" },
    ],
    beliefs: [
      "건강한 조직 문화가 최고의 학습 환경을 만든다고 믿습니다.",
      "서로의 다양성을 존중하는 커뮤니티를 지향합니다.",
    ],
  },
  {
    id: "leader5",
    avatarUrl: leader1,
    name: "최동혁",
    role: "기술 멘토",
    job: "소프트웨어 엔지니어 & 코치",
    education: ["KAIST 전산학과 학사", "Stanford CS 석사"],
    careerHistory: [
      {
        company: "TechBridge",
        position: "소프트웨어 엔지니어",
        duration: "2010-2015",
      },
      { company: "CodeTribe", position: "기술 코치", duration: "2015-현재" },
    ],
    socials: [
      { platform: "GitHub", url: "https://github.com/donghyukchoi" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/donghyukchoi" },
    ],
    beliefs: [
      "학습은 행동을 통해서만 완전해집니다.",
      "기술과 커뮤니티의 힘을 결합해야 성장할 수 있습니다.",
    ],
  },
  {
    id: "leader6",
    avatarUrl: leader2,
    name: "한지민",
    role: "커뮤니케이션 전문가",
    job: "퍼실리테이터 & 연사",
    education: [
      "서울대학교 언론정보학과 학사",
      "Columbia University 커뮤니케이션 석사",
    ],
    careerHistory: [
      {
        company: "MediaConnect",
        position: "커뮤니케이션 코치",
        duration: "2011-2016",
      },
      { company: "TribeTalk", position: "교육 담당", duration: "2016-현재" },
    ],
    socials: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/jiminhan" },
    ],
    beliefs: [
      "좋은 소통이 학습과 협업의 핵심이라고 믿습니다.",
      "공감과 피드백이 활발한 환경을 만드는 것이 중요합니다.",
    ],
  },
  {
    id: "leader7",
    avatarUrl: leader4,
    name: "윤성호",
    role: "창의적 리더",
    job: "디자인 전략가 & 멘토",
    education: [
      "홍익대학교 시각디자인과 학사",
      "Rhode Island School of Design 석사",
    ],
    careerHistory: [
      {
        company: "DesignLab",
        position: "프로젝트 매니저",
        duration: "2010-2014",
      },
      {
        company: "CreativeTribe",
        position: "디자인 전략가",
        duration: "2014-현재",
      },
    ],
    socials: [
      { platform: "Instagram", url: "https://instagram.com/sunghoyoon" },
    ],
    beliefs: [
      "창의성은 서로 다른 관점을 결합할 때 빛납니다.",
      "작은 실험과 공유가 큰 변화를 만듭니다.",
    ],
  },
  {
    id: "leader8",
    avatarUrl: leader3,
    name: "서예진",
    role: "학습 코치",
    job: "교육 컨설턴트 & 퍼실리테이터",
    education: [
      "이화여자대학교 교육학과 학사",
      "University of Cambridge 교육학 석사",
    ],
    careerHistory: [
      {
        company: "LearnTogether",
        position: "교육 프로그램 매니저",
        duration: "2013-2017",
      },
      {
        company: "TribeLearning",
        position: "학습 코치",
        duration: "2017-현재",
      },
    ],
    socials: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/yejinseo" },
    ],
    beliefs: [
      "학습은 개인보다 공동체 안에서 더 깊어집니다.",
      "실제 경험과 반성이 결합될 때 진정한 성장이 일어납니다.",
    ],
  },
  {
    id: "leader9",
    avatarUrl: leader1,
    name: "강태우",
    role: "전략 기획자",
    job: "사업 개발 & 커뮤니티 전략가",
    education: ["성균관대학교 경영학과 학사", "INSEAD MBA"],
    careerHistory: [
      {
        company: "BizGrowth",
        position: "전략 컨설턴트",
        duration: "2012-2016",
      },
      {
        company: "TribeStrategy",
        position: "커뮤니티 전략가",
        duration: "2016-현재",
      },
    ],
    socials: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/taeukang" },
    ],
    beliefs: [
      "명확한 목표와 전략이 커뮤니티 성장을 촉진합니다.",
      "모든 구성원이 리더로서의 역할을 수행할 수 있어야 합니다.",
    ],
  },
  {
    id: "leader10",
    avatarUrl: leader2,
    name: "조은비",
    role: "혁신 코치",
    job: "스타트업 멘토 & 퍼실리테이터",
    education: ["KAIST 산업디자인학과 학사", "MIT Innovation Lab 석사"],
    careerHistory: [
      {
        company: "Innovators Hub",
        position: "스타트업 멘토",
        duration: "2013-2018",
      },
      {
        company: "TribeInnovate",
        position: "혁신 코치",
        duration: "2018-현재",
      },
    ],
    socials: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/eunbijo" },
      { platform: "Twitter", url: "https://twitter.com/eunbijo" },
    ],
    beliefs: [
      "혁신은 협업과 실험 속에서 만들어집니다.",
      "실패를 두려워하지 않고 배우는 문화가 중요합니다.",
    ],
  },
];
