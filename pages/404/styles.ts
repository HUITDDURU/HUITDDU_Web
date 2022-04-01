import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
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

export const ToMain = styled.div`
  a {
    font: ${({ theme }) => theme.fonts.body2};
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.grayscale.gray2};
  }
`;
