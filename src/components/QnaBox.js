import React, { useState, useCallback } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const QnaBox = ({ question, answer }) => {
  const [qnaBoxDisplay, setQnaBoxDisplay] = useState(false);

  const displayToggle = useCallback(() => {
    setQnaBoxDisplay((v) => !v);
  }, [qnaBoxDisplay]);
  return (
    <div class={`qna_box_wrap ${qnaBoxDisplay ? `show` : `hide`}`}>
      <div class="question_wrap" onClick={displayToggle}>
        <div class="question_txt_area">
          <span>Q.</span>
          <p>{question}</p>
        </div>
        <button type="button">
          <ExpandMoreIcon />
        </button>
      </div>
      <div class="answer_wrap">
        <span>A.</span>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default QnaBox;
