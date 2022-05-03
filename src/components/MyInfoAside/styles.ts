import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 28px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  border-radius: 10px;
  position: sticky;
  top: 140px;
`;

export const Profile = styled.div`
  border-radius: 50%;
  width: 305px;
  height: 305px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0 auto;
`;

export const Name = styled.div`
  font: ${({ theme }) => theme.fonts.heading1};
  color: ${({ theme }) => theme.colors.grayscale.black};
  margin-top: 36px;
  margin-bottom: 16px;
`;

export const Description = styled.div`
  font: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
  margin-bottom: 8px;
`;

export const OneLine = styled.div`
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
`;
