import styled from "@emotion/styled";

export const Description = styled.span`
  font: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const TitleContainer = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
  margin-bottom: 8px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Error = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font: ${({ theme }) => theme.fonts.description};
  flex: 1;
  text-align: right;
`;
