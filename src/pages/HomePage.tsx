import { Company, Megaphone, Report } from "../assets";
import { Route } from "../components/home/Route";
import styled from "styled-components";

const RouteList = [
  {
    link: "/company/management",
    img: Company,
    title: "기업 관리",
    desription: "등록되어 있는 기업을\n 관리할 수 있습니다.",
  },
  {
    link: "/report/management",
    img: Report,
    title: "신고 관리",
    desription: "사용자가 신고한 리스트를\n 확인할 수 있습니다.",
  },
  {
    link: "/notice/registration",
    img: Megaphone,
    title: "공지사항 관리",
    desription: "사용자에게 공지한 공지사항\n 리스트를 확인할 수 있습니다.",
  },
];

export const HomePage = () => {
  return (
    <div>
      <_AdminPage>Admin Page</_AdminPage>
      <_Wrapper>
        <div>
          {RouteList.map((route) => (
            <Route {...route} />
          ))}
        </div>
      </_Wrapper>
    </div>
  );
};

const _AdminPage = styled.div`
  color: ${({ theme }) => theme.color.main};
  font-weight: 600;
  font-size: 32px;
  margin: 70px 0;
`;

const _Wrapper = styled.div`
  display: flex;
  justify-content: center;
  > div {
    width: 1060px;
    display: flex;
    justify-content: space-between;
  }
`;
