import styled from "@emotion/styled";

export const Button = styled.button`
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.grayscale.black};
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  border: solid 1px ${({ theme }) => theme.colors.grayscale.black};

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.8);
  }
`;
