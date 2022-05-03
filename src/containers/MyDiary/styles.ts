import styled from "@emotion/styled";

export const Outer = styled.div`
  flex: 1;
  width: 100%;
  padding-top: 80px;
  margin-bottom: 200px;
`;

export const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;

export const AsideContainer = styled.div`
  position: relative;
  height: 100%;
`;
