import { Report } from "../../assets";
import styled from "styled-components";

export const ReportItem = () => {
  return (
    <_Wrapper>
      <_Name>
        <img width={52} src={Report} />
        <span>Adobe</span>
      </_Name>
      <_Command>
        영구 정지 <b>|</b> 경고 보내기
      </_Command>
    </_Wrapper>
  );
};

const _Name = styled.div`
  display: flex;
  align-items: center;
  > img {
    margin: 0 44px 0 24px;
  }
  > span {
    color: ${({ theme }) => theme.color.gray2};
    font-weight: 600;
    font-size: 24px;
  }
`;

const _Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  border-radius: 10px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const _Command = styled.span`
  font-weight: 600;
  font-size: 24px;
  color: ${({ theme }) => theme.color.error};
  margin-right: 30px;
  > b {
    color: ${({ theme }) => theme.color.gray2};
  }
`;
