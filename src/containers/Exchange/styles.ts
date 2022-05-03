import styled from "@emotion/styled";

export const Container = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font: ${({ theme }) => theme.fonts.heading1};
  color: ${({ theme }) => theme.colors.grayscale.black};
  margin-bottom: 36px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 20px;
`;

export const ButtonWrapper = styled.div`
  grid-column: 2 / 6;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
`;

export const Button = styled.button`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  height: 440px;
  background-color: transparent;
  transition: background-color 0.2s ease-in-out;
  will-change: background-color;

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
