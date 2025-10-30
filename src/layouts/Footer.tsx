import { Link } from "react-router-dom";

export const Footer = () => {
  const links = [
    {
      name: "이용약관",
      path: "/extra/term-of-service",
    },
    {
      name: "개인정보처리방침",
      path: "/extra/privacy-policy",
    },
  ];

  return (
    <footer className="bg-zinc-500 text-white text-sm p-4 space-y-4">
      <div className="space-x-2">
        {links.map((link) => (
          <Link to={link.path} key={link.path}>
            {link.name}
          </Link>
        ))}
      </div>
      <div>
        <p>© TRIBES Corp 한 사람의 위대한 변화</p>
      </div>
      <div>
        <p>
          주소 : ​​서울특별시 송파구 마천로 119 마나하임 703호 | 대표 : 장주영 |
          사업자 등록번호 419-58-00957
        </p>
        <p>이메일 : tribesleader1@gmail.com | 연락처 010-9004-7602</p>
      </div>
      <div>
        <p>
          TRIBES 의 모든 콘텐트는 저작권법의 보호를 받은바,무단 전재, 복사.배포
          등을 금합니다.​​
        </p>
        <p>
          ® 2024. TRIBES all rights reserved ©2024 Tribes all right reserved.
        </p>
      </div>
    </footer>
  );
};
