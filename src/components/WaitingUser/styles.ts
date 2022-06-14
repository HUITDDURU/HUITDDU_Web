import styled from "@emotion/styled";

export const Title = styled.h1`
  font: ${({ theme }) => theme.fonts.heading1};
  color: ${({ theme }) => theme.colors.grayscale.black};
  margin-bottom: 60px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

export const ProfileImage = styled.div`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grayscale.gray2};
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.grayscale.gray2};
  border-radius: 50%;
  pointer-events: none;
`;
