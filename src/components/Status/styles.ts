import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  border: solid 1px ${({ theme }) => theme.colors.grayscale.lightGray1};
  padding: 28px 0px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-column: span 1;
  grid-row: span 1;
`;

export const Profile = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 150px;
  height: 150px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const ProfileContainer = styled.div`
  width: 100px;
  height: 150px;
  position: relative;
`;

export const ProfileOuter = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.black};
  text-align: center;
  margin-top: 60px;

  b {
    font: ${({ theme }) => theme.fonts.body1};
  }
`;

export const Stop = styled.button`
  padding: 0;
  background: transparent;
  border: none;
  font: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
  margin-top: 16px;
  transition: color 0.2s ease-in-out;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.grayscale.black};
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 24px;
`;
