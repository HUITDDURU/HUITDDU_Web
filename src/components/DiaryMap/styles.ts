import styled from "@emotion/styled";

export const Container = styled.div`
  grid-row: span 2;
  grid-column: span 3;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  position: relative;
  overflow-x: scroll;
  display: flex;
  padding: 0px 40px;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const MyLine = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 5px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Column = styled.div`
  position: relative;
  width: 80px;
  flex-shrink: 0;
  height: 100%;

  &:hover .date {
    opacity: 1;
  }
`;

export const Dot = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grayscale.white};
  border-radius: 50%;
  width: 11px;
  height: 11px;
  position: absolute;
  left: 0px;
  transform: translate(-25%, -25%);
  z-index: 2;
`;

export const Date = styled.div`
  font: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  bottom: 16px;
  position: absolute;
  transform: translateX(-50%);
  transition: opacity 0.2s ease-in-out;
  opacity: 0.5;
`;

export const Line = styled.div`
  width: 100%;
  height: 5px;
  position: absolute;
  left: 0px;
`;

export const StartUp = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  background: transparent;
  border-top: 5px solid;
  border-left: 5px solid;
  border-top-left-radius: 10px;
`;

export const StartDown = styled(StartUp)`
  border-bottom: 5px solid;
  border-left: 5px solid;
  border-top: 0px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 10px;
  transform: translateY(calc(-100% + 5px));
`;
