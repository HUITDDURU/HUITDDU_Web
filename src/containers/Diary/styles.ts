import styled from "@emotion/styled";

export const Title = styled.h1`
  font: ${({ theme }) => theme.fonts.heading1};
  color: ${({ theme }) => theme.colors.grayscale.black};
  margin-bottom: 80px;
  padding-top: 80px;
`;

export const Add = styled.button`
  background-color: transparent;
  padding: 28px;
  text-align: center;
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  transition: background-color 0.2s ease-in-out;
  will-change: background-color;
  width: 100%;
  color: ${({ theme }) => theme.colors.grayscale.gray2};

  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
  }
`;

export const Container = styled.div`
  width: 100%;
`;
