import styled from "@emotion/styled";

export const Button = styled.a`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  height: 440px;
  background-color: transparent;
  transition: background-color 0.2s ease-in-out;
  will-change: background-color;
  display: flex;
  justify-content: center;
  flex-direction: column;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
  }
`;

export const Name = styled.h3`
  font: ${({ theme }) => theme.fonts.heading3};
  color: ${({ theme }) => theme.colors.grayscale.black};
  text-align: center;
  margin-top: 24px;
`;

export const Description = styled.h3`
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  text-align: center;
  margin-top: 8px;
`;

export const ButtonInner = styled.div`
  display: flex;
  justify-content: center;
`;
