import styled from "styled-components";

export const Registration = () => {
  return (
    <div>
      <_NoticeRegistration>공지사항 등록</_NoticeRegistration>
      <_TitleInput placeholder="제목을 입력해주세요" />
      <_ContentInput placeholder="내용을 입력해주세요" />
      <_PictureInput type="file" placeholder="사진을 첨부해주세요" />
      <_RegistrationBtn>등록</_RegistrationBtn>
    </div>
  );
};

const _NoticeRegistration = styled.div`
  font-weight: 600;
  font-size: 32px;
  color: ${({ theme }) => theme.color.main};
  margin: 40px 0 65px 0;
`;

const _TitleInput = styled.input`
  width: 100%;
  height: 60px;
  border: 1px solid ${({ theme }) => theme.color.gray1};
  border-radius: 10px;
  font-weight: 400;
  font-size: 20px;
  padding-left: 24px;
  :focus {
    border: 1px solid ${({ theme }) => theme.color.main};
  }
`;

const _ContentInput = styled.textarea`
  height: 300px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.gray1};
  border-radius: 10px;
  padding: 14px 0 0 24px;
  font-weight: 400;
  font-size: 20px;
  margin-top: 30px;
`;

const _PictureInput = styled.input``;

const _RegistrationBtn = styled.button`
  width: 100px;
  height: 36px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};
  font-weight: 600;
  font-size: 16px;
`;
