import styled from "@emotion/styled";

export const Button = styled.button`
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.grayscale.black};
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  border: solid 1px ${({ theme }) => theme.colors.grayscale.black};
  transition: filter 0.2s ease-in-out;
  user-select: none;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.primary};
    border: solid 1px ${({ theme }) => theme.colors.primary};
  }

  &:active,
  &:disabled {
    filter: brightness(0.8);
  }
`;
