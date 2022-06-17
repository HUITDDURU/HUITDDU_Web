import { Modal } from "@nextui-org/react";
import { FC } from "react";
import * as S from "./styles";

interface PropsType {
  open: boolean;
  title: string;
  content: string;
  onConfirm: () => void;
  onClose: () => void;
  confirmMessage: string;
}

const ConfirmModal: FC<PropsType> = (props) => {
  const { onClose, open, content, onConfirm, title, confirmMessage } = props;
  return (
    <Modal onClose={onClose} open={open} closeButton>
      <S.Container>
        <S.Title>
          {title.split("\n").map((value, index) => (
            <div key={index}>{value}</div>
          ))}
        </S.Title>
        <S.Content>
          {content.split("\n").map((value, index) => (
            <div key={index}>{value}</div>
          ))}
        </S.Content>
        <S.ButtonContainer>
          <S.Cancel>취소</S.Cancel>
          <S.Confirm onClick={onConfirm}>{confirmMessage}</S.Confirm>
        </S.ButtonContainer>
      </S.Container>
    </Modal>
  );
};

export default ConfirmModal;
