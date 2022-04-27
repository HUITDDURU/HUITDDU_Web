import * as S from "./styles";

const Status = () => {
  return (
    <S.Container>
      <S.ProfileOuter>
        <S.ProfileContainer>
          <S.Profile />
        </S.ProfileContainer>
        <S.ProfileContainer>
          <S.Profile />
        </S.ProfileContainer>
      </S.ProfileOuter>
      <S.Content>
        <div>
          <b>당신</b>과&nbsp;<b>user1234</b>님이
        </div>
        <div>일기를 교환하고 있습니다.</div>
      </S.Content>
      <S.Stop>그만두기</S.Stop>
    </S.Container>
  );
};

// const StartExchange = () => {
//   return (
//     <S.Container>
//       <S.ProfileOuter>
//         <S.ProfileContainer>
//           <S.Profile />
//         </S.ProfileContainer>
//       </S.ProfileOuter>
//       <S.Content>
//         <div>일기 교환 할 사람을</div>
//         <div>정하지 않았습니다.</div>
//       </S.Content>
//       <S.Buttons>
//         <S.Stop>무작위 사람과 교환</S.Stop>
//         <S.Stop>친구와 교환</S.Stop>
//       </S.Buttons>
//     </S.Container>
//   );
// };

export default Status;
