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
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  flex-direction: row-reverse;
`;
