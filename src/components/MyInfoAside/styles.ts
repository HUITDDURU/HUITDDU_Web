import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 28px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  border-radius: 10px;
  position: sticky;
  top: 140px;
`;

export const Profile = styled.button`
  border-radius: 50%;
  width: 305px;
  height: 305px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0 auto;
  overflow: hidden;
  position: relative;

  &:hover .overlay {
    opacity: 1;
  }
`;

export const ProfileOverlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.grayscale.black}90;
  display: flex;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.div`
  font: ${({ theme }) => theme.fonts.heading1};
  color: ${({ theme }) => theme.colors.grayscale.black};
  margin-top: 36px;
  margin-bottom: 16px;
`;

export const Description = styled.div`
  font: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
  margin-bottom: 8px;
`;

export const OneLine = styled.div`
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
`;
