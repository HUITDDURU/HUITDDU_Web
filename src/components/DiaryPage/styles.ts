import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 28px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  border-radius: 10px;
  background-color: transparent;
`;

export const TitleContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.heading2};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const UseContainer = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
`;

export const UserProfile = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const UserName = styled.div`
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const Gray = styled.div`
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const Margin16 = styled.div`
  margin-top: 16px;
`;

export const Margin8 = styled.div`
  margin-top: 8px;
`;

export const Margin40 = styled.div`
  margin-top: 40px;
`;

export const Hr = styled.hr`
  color: ${({ theme }) => theme.colors.grayscale.gray2};
`;

export const Image = styled.div`
  max-height: 500px;
  max-width: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.grayscale.gray2};
  height: 500px;
  width: 600px;
  margin: 0 auto;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;

  span {
    display: block !important;
  }

  image {
    display: block !important;
  }
`;
