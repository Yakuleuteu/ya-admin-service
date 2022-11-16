import { Background } from "../../assets";
import styled from "styled-components";

export const CompanyItem = () => {
  return (
    <_Wrapper>
      <div>
        <_Picture width={80} height={80} src={Background} />
        <_Name>Adobe</_Name>
      </div>
      <div>
        <_ManagementBtn>경고 보내기</_ManagementBtn>
        <_ManagementBtn>영구 정지</_ManagementBtn>
      </div>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > :first-child {
    display: flex;
    align-items: center;
  }
`;

const _Picture = styled.img`
  border-radius: 70%;
`;

const _Name = styled.span`
  font-weight: 600;
  font-size: 32px;
  margin-left: 30px;
`;

const _ManagementBtn = styled.span`
  margin-left: 50px;
  font-weight: 600;
  font-size: 22px;
`;
