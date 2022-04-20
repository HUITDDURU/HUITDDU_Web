import styled from "@emotion/styled";

export const Container = styled.header`
  width: 100%;
  height: 60px;
`;

export const Inner = styled.div`
  margin: 0 auto;
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const Nav = styled.a`
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
  transition: color 0.2s ease-in-out;
  will-change: color;

  &:hover {
    color: ${({ theme }) => theme.colors.grayscale.black};
    text-decoration: underline;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  column-gap: 28px;
  align-items: center;
  margin-right: 36px;
`;

export const RightOuter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
