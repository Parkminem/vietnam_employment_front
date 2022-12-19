import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import AOS from "aos";
import "aos/dist/aos.css";
import "./asset/css/common.css";
import "./asset/css/style_kr.css";
import "./asset/css/style.css";
import Main from "./page/Main";
import Apply from "./page/Apply";
import ApplyField from "./page/ApplyField";
import ApplyTrend from "./page/ApplyTrend";
import ApplyComplete from "./page/ApplyComplete";
import ApplyCompleteLogin from "./page/ApplyCompleteLogin";
import Qna from "./page/Qna";
import ScrollToTop from "./util/ScrollTop";
import { ApplyFormState } from "./store/atom";

const App = () => {
  const applyForm = useRecoilValue(ApplyFormState);
  const { full_name, email } = applyForm;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <div className="wrap wrap_basic">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/applyfield" element={<ApplyField />} />
            <Route
              path="/applytrend"
              element={
                !full_name || !email ? <ApplyCompleteLogin /> : <ApplyTrend />
              }
            />
            <Route path="/applycomplete" element={<ApplyComplete />} />
            <Route path="/qna" element={<Qna />} />
            <Route path="*" element={<Main />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
