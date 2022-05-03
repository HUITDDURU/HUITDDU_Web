import styled from "@emotion/styled";
import Input from "../../components/Input";

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.heading1};
  color: ${({ theme }) => theme.colors.grayscale.black};
  text-align: center;
  margin-bottom: 28px;
`;

export const CodeDescription = styled.div`
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
  text-align: center;
`;

export const LastDescription = styled(CodeDescription)`
  margin-bottom: 28px;
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const Or = styled(CodeDescription)`
  margin: 30px 0px;
`;

export const CodeInput = styled(Input)`
  text-align: center;
`;

export const Enter = styled.div`
  font: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
  text-align: center;
  margin-top: 0px;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  will-change: height, opacity, margin-top;
  height: 0px;

  &.active {
    margin-top: 12px;
    opacity: 1;
    height: 20px;
  }
`;
