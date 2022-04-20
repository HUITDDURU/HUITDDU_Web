import styled from "@emotion/styled";

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 16px;
`;

export const Error = styled.div`
  font-size: 144px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const Content = styled.div`
  font: ${({ theme }) => theme.fonts.heading1};
  color: ${({ theme }) => theme.colors.grayscale.black};
  display: flex;
  align-items: center;

  img {
    width: 40px;
  }
`;

export const ToMain = styled.a`
  font: ${({ theme }) => theme.fonts.body2};
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  transition: color 0.2s ease-in-out;
  will-change: color;

  &:hover {
    color: ${({ theme }) => theme.colors.grayscale.black};
  }
`;
