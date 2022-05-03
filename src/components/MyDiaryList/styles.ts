import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 28px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  border-radius: 10px;
  grid-column: span 3;
`;

export const Title = styled.h2`
  font: ${({ theme }) => theme.fonts.heading1};
  color: ${({ theme }) => theme.colors.grayscale.black};
  margin-bottom: 28px;
`;

export const Grid = styled.div`
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  display: grid;
`;
