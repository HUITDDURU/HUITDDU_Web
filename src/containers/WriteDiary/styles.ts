import styled from "@emotion/styled";
import Input from "../../components/Input";

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.heading1};
  margin: 80px 0px;
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const Container = styled.div`
  width: 100%;
  margin-bottom: 200px;
`;

export const Subtitle = styled.div`
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
  margin-bottom: 8px;
`;

export const TitleInput = styled(Input)`
  font: ${({ theme }) => theme.fonts.heading3};
  color: ${({ theme }) => theme.colors.grayscale.black};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayscale.gray2};
    font: ${({ theme }) => theme.fonts.heading3};
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
`;

export const DateContainer = styled.div`
  display: flex;
  column-gap: 16px;
`;

export const DateOuter = styled.div`
  display: flex;
  column-gap: 40px;
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
`;

export const DateRadioInput = styled.input`
  display: none;
  &:checked + label {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const DateRadioLabel = styled.label`
  transition: color 0.2s ease-in-out;
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  user-select: none;
`;

export const FeelingContainer = styled(DateContainer)`
  column-gap: 12px;
`;

export const FeelingRadioInput = styled(DateRadioInput)`
  &:checked + label {
    color: ${({ theme }) => theme.colors.grayscale.black};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FeelingRadioLabel = styled.label`
  transition: background-color 0.2s ease-in-out;
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.black};
  user-select: none;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
  width: 30px;
  height: 30px;
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 16px;
`;
