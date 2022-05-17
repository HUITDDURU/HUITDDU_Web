import styled from "@emotion/styled";

export const Container = styled.div`
  grid-column: span 1;
  grid-row: span 1;
  display: flex;
  flex-direction: column;
  padding: 28px 0px;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  border-radius: 10px;
  justify-content: space-between;
  min-height: 235px;
  user-select: none;
`;

export const Diary = styled.div`
  height: 13px;
  position: relative;
  display: flex;
  justify-content: center;
  &:last-of-type {
    height: auto;
  }
`;

export const Content = styled.div`
  font: ${({ theme }) => theme.fonts.body2};
  color: transparent;
  text-align: center;

  span {
    background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};
    border-radius: 5px;
  }

  div {
    height: 5px;
  }

  b {
    font: ${({ theme }) => theme.fonts.body1};
  }
`;

export const Button = styled.button`
  padding: 0px;
  background: transparent;
  border: none;
  font: ${({ theme }) => theme.fonts.description};
  color: transparent;
  justify-self: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};

  &:hover {
    text-decoration: underline;
  }
`;

export const Flex = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
`;
