import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import BottomBtn from "./BottomBtn";
import { ModalStyleState } from "../store/atom";

const ModalWrap = styled.div`
  display: ${({ display }) => display};
`;

const Modal = () => {
  const [modalStyle, setModalStyle] = useRecoilState(ModalStyleState);
  return (
    <ModalWrap display={modalStyle} className="modal_wrap">
      <div className="modal_box_wrap">
        <div className="modal_box">
          <h2>지원 취소 하기</h2>
          <p>
            취소 시 모든 기입한 정보들은 삭제됩니다.
            <br />
            그래도 취소하시겠습니까?
          </p>
          <div className="btn_wrap">
            <BottomBtn style="btn_line" route="/" content="취소" />
            <BottomBtn style="btn_color_bg" content="계속 하기" />
          </div>
        </div>
      </div>
    </ModalWrap>
  );
};

export default Modal;
