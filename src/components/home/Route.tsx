import styled from "styled-components";
import { Link } from "react-router-dom";

interface PropsType {
  link: string;
  img: string;
  title: string;
  desription: string;
}

export const Route = (props: PropsType) => {
  const { img, title, desription, link } = props;
  return (
    <_Wrapper to={link}>
      <_Icon>
        <img src={img} />
      </_Icon>
      <_Title>{title}</_Title>
      <_Content>{desription}</_Content>
    </_Wrapper>
  );
};

const _Icon = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 70%;
  background-color: ${({ theme }) => theme.color.gray4};
  margin: 60px 0 31px 0;
`;

const _Wrapper = styled(Link)`
  width: 260px;
  height: 320px;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.white};
`;

const _Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 6px;
`;

const _Content = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.color.gray1};
  white-space: pre-wrap;
  line-height: 26px;
  text-align: center;
`;
