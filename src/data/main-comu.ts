import { leader1, leader2, leader3, leader4 } from "../assets";

export const MainComu = {
  title: "세상을 변화 시키는 한 사람의 위대한 변화",
  leader: {
    title: "Leader",
    profile: {
      id: "leader1",
      avatarUrl: leader1,
      name: "장주영",
      role: "기획자",
      job: "트라이브즈 기획대표",
    },
    info: {
      intro: {
        title: "소개",
        desc: `트라이브즈는 새로운 공동체 문화를 만들어가는 학습 공동체입니다.
이곳에서 우리는 함께 배우고, 나를 변화 시키며, 성장과 나눔의 가치를 실현합니다.
이곳에서 자신만의  꿈으로  시대와 다음 세대를 이끄는 리더를 기대합니다.`,
      },
      vision: {
        title: "비전",
        desc: `이 시대를 변화 시킬 한 사람의 리더와 다음 세대를 변화 시킬 리더를 양성한다.`,
      },
      mission: {
        title: "미션",
        desc: `세계를 변화 시킬 리더를 양성할 수 있는  이상적인 공동체를 연구하고
교육공동체를 구축하여 문화와 교육을 실험하고 전파한다.`,
      },
    },
  },
  leadership: {
    title: "Leadership",
    leaders: [
      {
        id: "leader2",
        avatarUrl: leader2,
        role: "Planner",
        name: "류하온",
        job: "TRIBES 기획자",
      },
      {
        id: "leader3",
        avatarUrl: leader3,
        role: "Helper",
        name: "이미란",
        job: "TRIBES 이사",
      },
      {
        id: "leader4",
        avatarUrl: leader4,
        role: "Speaker",
        name: "장노아",
        job: "TRIBES PM",
      },
    ],
  },
};
