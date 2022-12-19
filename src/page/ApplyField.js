import React, { useEffect } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import ApplyFieldPosition from "../components/ApplyFieldPosition";
import HeaderWrap from "../components/HeaderWrap";
import TopTitWrap from "../components/TopTitWrap";
import CategoryList from "../components/CategoryList";
import ProcessList from "../components/ProcessList";
import { CategoryIndexState } from "../store/atom";

const positionsArray = [
  {
    num: 1,
    title: "데생 콘티",
    imgs: [
      "images/img/drawing01_storyboard.png",
      "images/img/drawing02_dessin.png",
    ],
    texts: [
      "그림 콘티",
      "데생 콘티",
      "그림콘티를 데생콘티로 제작하는 작업 입니다.",
      "아이디어콘서트에서 제공한 그림 콘티를 데생 콘티로 작업을 할수 있는 작가를 찾습니다.",
    ],
  },
  {
    num: 2,
    title: "선화",
    imgs: ["images/img/drawing02_dessin.png", "images/img/drawing03_line.png"],
    texts: [
      "데생 콘티",
      "선화",
      "데생 콘티를 선화로 제작하는 작업입니다.",
      "캐릭터의 매력을 살려 세밀하게 펜선으로 강약을 표현해 그려내는 파트입니다.",
    ],
  },
  {
    num: 3,
    title: "채색 및 보정",
    imgs: ["images/img/drawing03_line.png", "images/img/drawing04_color.png"],
    texts: [
      "선화",
      "채색 및 보정",
      "선화위에 채색 하는 작업입니다.",
      "라인아트 위에 채색을 입혀 웹툰을 생생하게 입혀내는 파트입니다.",
    ],
  },
  {
    num: 4,
    title: "배경 아트",
    imgs: [
      "images/img/drawing05_bg_before.png",

      "images/img/drawing06_bg_after.png",
    ],
    texts: [
      "작업이 안된 배경",
      "배경 작업 및 보정",

      "웹툰의 배경을 제작하는 작업입니다.",
      "표현이 제대로 되어 있지 않은 기본 배경을 작품의 분위기에 맞게 채색하고 연출하는 파트입니다.",
    ],
  },
];

const Apply = () => {
  const [positionId, setPositionId] = useRecoilState(CategoryIndexState);
  const resetPositionId = useResetRecoilState(CategoryIndexState);
  useEffect(() => {
    return resetPositionId;
  }, []);
  return (
    <>
      <HeaderWrap />
      <div className="sub_wrap">
        <div className="sub_cont_wrap">
          <TopTitWrap
            title="고민은 기회를 늦출뿐!"
            content="아이디어콘서트는 지금 웹툰작가 모집중! 좋은 웹툰을 만들어나갈 수
              있도록 함께 해주세요."
          />
          <div className="sub_cont_area">
            <div className="work_process_wrap">
              <h4>아이디어콘서트 작업 공정</h4>
              <div className="process_box">
                <ul>
                  <ProcessList
                    index={1}
                    processImg="images/img/process01.png"
                    processImgAlt="작업공정 첫번째 사진"
                    iConImg="images/img/acon_face.png"
                    content="그림 콘티 (제공)"
                  />
                  <ProcessList
                    index={2}
                    processImg="images/img/process02.png"
                    processImgAlt="작업공정 두번째 사진"
                    iConImg="images/img/acon_left.png"
                    content="데생 콘티"
                  />
                  <ProcessList
                    index={3}
                    processImg="images/img/process03.png"
                    processImgAlt="작업공정 세번째 사진"
                    iConImg="images/img/acon_walk.png"
                    content="선화"
                  />
                  <ProcessList
                    index={4}
                    processImg="images/img/process04.png"
                    processImgAlt="작업공정 네번째 사진"
                    iConImg="images/img/acon_final.png"
                    content="채색 및 보정"
                  />
                </ul>
              </div>
              <div className="info_txt_box">
                <p>
                  작업은{" "}
                  <span>
                    그림 콘티 - 데생 콘티 - 선화 - 채색 및 보정 - 배경 작업
                  </span>
                  이 이루어 집니다.
                </p>
              </div>
            </div>
            <div className="recruitment_position_wrap">
              <h3>모집중인 포지션</h3>
              <p>데생콘티와 선화 채색및 보정이 가능한 자는 지원해 주세요.</p>
            </div>
            <div className="position_info_wrap">
              <div className="category_tab_wrap">
                <ul>
                  {positionsArray.map((v, i) =>
                    i === 0 ? (
                      <CategoryList
                        key={v.title + i}
                        index={i}
                        className="active"
                        content={v.title}
                      />
                    ) : (
                      <CategoryList
                        key={v.title + i}
                        index={i}
                        content={v.title}
                      />
                    )
                  )}
                </ul>
              </div>
              <ApplyFieldPosition data={positionsArray[positionId]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apply;
