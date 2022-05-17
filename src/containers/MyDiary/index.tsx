import { dehydrate, QueryClient } from "react-query";
import { getMyDiaryList, getProfile } from "../../api/My";
import MyDiaryList from "../../components/MyDiaryList";
import MyInfoAside from "../../components/MyInfoAside";
import queryKeys from "../../constant/queryKeys";
import * as S from "./styles";

const MyDiaryContainer = () => {
  return (
    <S.Outer>
      <S.Container>
        <S.AsideContainer>
          <MyInfoAside />
        </S.AsideContainer>
        <MyDiaryList />
      </S.Container>
    </S.Outer>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([queryKeys.my], getProfile);
  await queryClient.prefetchQuery([queryKeys.myDiaryList], getMyDiaryList);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default MyDiaryContainer;
