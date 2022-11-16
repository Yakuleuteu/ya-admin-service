import { ReportItem } from "../../components/report/Item";
import styled from "styled-components";

export const ReportManagementPage = () => {
  return (
    <div>
      <_Name>신고 관리</_Name>
      <ReportItem />
    </div>
  );
};

const _Name = styled.div`
  margin: 40px 0;
  color: ${({ theme }) => theme.color.main};
  font-weight: 600;
  font-size: 32px;
`;
