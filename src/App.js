import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./asset/css/common.css";
import "./asset/css/style_kr.css";
import "./asset/css/style.css";
import Main from "./page/Main";
import AOS from "aos";
import "aos/dist/aos.css";
import { RecoilRoot } from "recoil";
import Apply from "./page/Apply";
import ApplyField from "./page/ApplyField";
import ApplyTrend from "./page/ApplyTrend";
import ApplyComplete from "./page/ApplyComplete";
import ApplyCompleteLogin from "./page/ApplyCompleteLogin";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <div className="wrap wrap_basic">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="/applyfield" element={<ApplyField />} />
              <Route path="/applytrend" element={<ApplyTrend />} />
              <Route path="/applycomplete" element={<ApplyComplete />} />
              <Route
                path="/applycompletelogin"
                element={<ApplyCompleteLogin />}
              />
              <Route path="*" element={<Main />} />
            </Routes>
          </div>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
};

export default App;
