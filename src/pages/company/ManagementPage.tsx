import { CompanyItem } from "../../components/company/Item";
import styled from "styled-components";

export const CompnayManagementPage = () => {
  return (
    <div>
      <_Name>기업 관리</_Name>
      <CompanyItem />
    </div>
  );
};

const _Name = styled.div`
  margin: 40px 0;
  color: ${({ theme }) => theme.color.main};
  font-weight: 600;
  font-size: 32px;
`;
