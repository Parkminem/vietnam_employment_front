import React from "react";
import HeaderWrap from "../components/HeaderWrap";
import TopTitWrap from "../components/TopTitWrap";
import QnaBox from "../components/QnaBox";

const Qna = () => {
  return (
    <>
      <HeaderWrap />
      <div className="sub_wrap">
        <div className="sub_cont_wrap">
          <TopTitWrap
            title="QnA"
            content="채용 관련하여 자주 문의하시는 내용들입니다. 지원 시 참고해 주십시오."
          />
          <div className="sub_cont_area">
            <QnaBox question="질문입니다1" answer="대답입니다1" />
            <QnaBox question="질문입니다2" answer="대답입니다2" />
            <QnaBox question="질문입니다3" answer="대답입니다3" />
            <QnaBox question="질문입니다4" answer="대답입니다4" />
            <QnaBox question="질문입니다5" answer="대답입니다5" />
            <QnaBox question="질문입니다6" answer="대답입니다6" />
            <QnaBox question="질문입니다7" answer="대답입니다7" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Qna;
