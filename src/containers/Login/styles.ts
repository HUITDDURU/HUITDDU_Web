import styled from "@emotion/styled";

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.heading2};
  color: ${({ theme }) => theme.colors.grayscale.black};
  margin-bottom: 28px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  margin-bottom: 36px;
`;

export const Description = styled.div`
  font: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
  margin-bottom: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  column-gap: 16px;
  justify-content: right;
  align-items: center;
`;
