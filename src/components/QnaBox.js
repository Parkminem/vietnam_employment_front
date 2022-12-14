import React, { useState, useCallback } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const QnaBox = ({ question, answer }) => {
  const [qnaBoxDisplay, setQnaBoxDisplay] = useState(false);

  const displayToggle = useCallback(() => {
    setQnaBoxDisplay((v) => !v);
  }, [qnaBoxDisplay]);
  return (
    <div className={`qna_box_wrap ${qnaBoxDisplay ? `show` : `hide`}`}>
      <div className="question_wrap" onClick={displayToggle}>
        <div className="question_txt_area">
          <span>Q.</span>
          <p>{question}</p>
        </div>
        <button type="button">
          <ExpandMoreIcon />
        </button>
      </div>
      <div className="answer_wrap">
        <span>A.</span>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default QnaBox;
