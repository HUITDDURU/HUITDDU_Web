import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  padding: 36px;
  border: solid 1px ${({ theme }) => theme.colors.grayscale.lightGray1};
  border-radius: 10px;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 36px;
`;
