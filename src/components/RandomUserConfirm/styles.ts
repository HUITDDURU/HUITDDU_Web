import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 650px;
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.heading2};
  color: ${({ theme }) => theme.colors.grayscale.black};
  text-align: center;
  margin-bottom: 30px;
`;

export const Container = styled.div`
  padding: 28px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  border-radius: 10px;
  display: flex;
  column-gap: 40px;
`;

export const Image = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  width: 200px;
  height: 200px;
  overflow: hidden;
`;

export const IntroContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 6px;
`;

export const OneLine = styled.div`
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const Intro = styled.div`
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const ButtonContainer = styled.div`
  display: flex;
  column-gap: 8px;
  width: 100%;
  margin-top: 16px;
  justify-content: center;
`;

export const Button = styled.button`
  flex: 1;
  padding: 8px 0px;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  text-align: center;
`;

export const Accept = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.grayscale.white};

  &:hover {
    filter: brightness(1.4);
  }
`;

export const Refuse = styled(Button)`
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  color: ${({ theme }) => theme.colors.error};
  border: 1px solid ${({ theme }) => theme.colors.error};

  &:hover {
    background-color: ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.grayscale.white};
  }
`;

export const TextButton = styled.button`
  padding: 12px;
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.colors.grayscale.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
  }
`;
