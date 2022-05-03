import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 28px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  border-radius: 10px;
  padding: 16px;
  padding-top: 40px;
`;

export const Profile = styled.div`
  width: 110px;
  height: 110px;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  transform: translateX(-25%);
`;

export const ProfileOuter = styled.div`
  width: 55px;
  height: 110px;
  position: relative;
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.grayscale.black};
  margin-bottom: 16px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Gray = styled.div`
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
`;
