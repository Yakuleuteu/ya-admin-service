import { Logo } from "../../assets";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <header>
      <_Wrapper to="/">
        <img src={Logo} alt="logo" />
        <_Name>GROUPBY</_Name>
      </_Wrapper>
    </header>
  );
};

const _Wrapper = styled(Link)`
  display: flex;
  align-items: center;
`;

const _Name = styled.span`
  color: ${({ theme }) => theme.color.main};
  font-weight: 600;
  font-size: 24px;
`;
