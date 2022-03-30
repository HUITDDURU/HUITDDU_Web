import styled from "@emotion/styled";

export const Button = styled.button`
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.grayscale.white};
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.8);
  }
`;
