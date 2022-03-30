import styled from "@emotion/styled";

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.grayscale.black};
  font: ${({ theme }) => theme.fonts.body2};
  border: none;
  padding: none;
  background-color: transparent;
  outline: none;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayscale.gray2};
    font: ${({ theme }) => theme.fonts.body2};
  }
`;

export const Line = styled.div`
  margin-top: 4px;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.grayscale.gray2};
  transition: background-color 0.2s ease-in-out;
`;

export const Container = styled.div`
  & input:focus {
    & + div {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
