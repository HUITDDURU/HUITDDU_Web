import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  padding: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.grayscale.black};
  font: ${({ theme }) => theme.fonts.heading2};
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  font: ${({ theme }) => theme.fonts.body2};
`;

export const Button = styled.button`
  border-radius: 10px;
  padding: 8px 0px;
  text-align: center;
  flex: 1;
  transition: all 0.2s ease-in-out;
`;

export const Confirm = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.grayscale.white};

  &:hover {
    filter: brightness(1.4);
  }
`;

export const Cancel = styled(Button)`
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
  border: 1px solid ${({ theme }) => theme.colors.grayscale.gray1};

  &:hover {
    color: ${({ theme }) => theme.colors.grayscale.black};
    border: 1px solid ${({ theme }) => theme.colors.grayscale.black};
    background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  column-gap: 8px;
  margin-top: 50px;
`;
