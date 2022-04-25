import styled from "@emotion/styled";

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.heading1};
  margin-bottom: 80px;
`;

export const Container = styled.div`
  padding-top: 80px;
  flex: 1;
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;

export const Right = styled.div`
  grid-row: span 1;
  display: flex;
  flex-direction: column;
  row-gap: 28px;
`;
