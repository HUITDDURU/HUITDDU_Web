import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 28px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  border-radius: 10px;
  background-color: transparent;
  user-select: none;
`;

export const TitleContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.heading2};
  color: transparent;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};
  border-radius: 5px;
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
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};
`;

export const UserName = styled.div`
  font: ${({ theme }) => theme.fonts.body2};
  color: transparent;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};
  border-radius: 5px;
`;

export const Gray = styled.span`
  font: ${({ theme }) => theme.fonts.body2};
  color: transparent;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};
  border-radius: 5px;
`;

export const Margin16 = styled.div`
  margin-top: 16px;
`;

export const Margin40 = styled.div`
  margin-top: 40px;
`;

export const Image = styled.div`
  max-height: 500px;
  max-width: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};
  height: 500px;
  width: 600px;
  margin: 0 auto;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  margin-top: 5px;
`;
