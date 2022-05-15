import styled from "@emotion/styled";

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.heading2};
  color: ${({ theme }) => theme.colors.grayscale.black};
  margin-bottom: 28px;
`;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  margin-bottom: 36px;
`;

export const Description = styled.div`
  font: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
  margin-bottom: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  column-gap: 16px;
  justify-content: right;
  align-items: center;
`;

export const Page = styled.div`
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ToLogin = styled.div`
  display: flex;
  align-items: center;
  & a {
    transition: color 0.2s ease-in-out;
    font: ${({ theme }) => theme.fonts.body2};
    color: ${({ theme }) => theme.colors.grayscale.gray2};
    align-items: center;
  }
  & a:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.grayscale.black};
  }
`;

export const ImageButton = styled.button`
  border: solid 1px ${({ theme }) => theme.colors.grayscale.gray1};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
  width: 100%;
  text-align: center;
  padding: 8px 0px;
  border-radius: 10px;
  transition: all 0.2 ease-in-out;

  &:hover {
    border: solid 1px ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 0px;
`;

export const ProfileContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
`;
