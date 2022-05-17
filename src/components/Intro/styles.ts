import styled from "@emotion/styled";
import TextareaAutosize from "react-textarea-autosize";

export const Description = styled.div`
  font: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const DescriptionContainer = styled.div`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
`;

export const ModifyButton = styled.button`
  font: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
  border: 0px;
  padding: 0px;
  transition: color 0.2s ease-in-out;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const OneLine = styled.div`
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const Input = styled(TextareaAutosize)`
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
  border: 0px;
  outline: none;
  padding: 0px;
  resize: none;
  width: 100%;

  &::placeholder {
    font: ${({ theme }) => theme.fonts.body2};
    color: ${({ theme }) => theme.colors.grayscale.gray1};
  }
`;
