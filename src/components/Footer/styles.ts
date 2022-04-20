import styled from "@emotion/styled";

export const Container = styled.div`
  height: 100px;
  width: 100%;
`;

export const Inner = styled.div`
  margin: 0 auto;
  width: 1280px;
  display: grid;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 20px;
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

export const Name = styled.div`
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.black};
  grid-column: 3/ 13;
  text-align: right;
`;
