import React from "react";
import HeaderWrap from "../component/HeaderWrap";
import MainContWrap from "../component/MainContWrap";
import MainBtmImgWrap from "../component/MainBtmImgWrap";

const Main = () => {
  return (
    <>
      <HeaderWrap />
      <div className="main_cont_set">
        <MainContWrap
          bgColor="bg_blue"
          circleLine="01"
          title="BEYOND WEBTOON"
          subTitle="우리는 웹툰을 사랑하는 사람들과 함께 일합니다."
          content="탄탄한 원작 스토리를 기반으로 스토리 작가와 웹툰 작가, 그리고
          프로듀서가 함께 일하며 서로의 의견에 귀기울이며 웹툰 작품을
          만들어가고 있습니다."
          mainImg="images/img/main_img01_toon.png"
        />
        <MainContWrap
          bgColor="bg_aqua"
          circleLine="02"
          flexOrder="2"
          title="BEYOND BORDERS"
          subTitle="우리는 국가의 경계를 넘어서 함께 작품을 그립니다."
          content="우리는 지역에 한계를 두지 않고 함께 웹툰을 그릴 수 있는 동료를 찾고 있으며, 각 나라에 재능이 많고 잠재력이 풍부한 웹툰작가들이 많다는 것을 알고 있습니다."
          mainImg="images/img/main_img02_toon.png"
        />
        <MainContWrap
          bgColor="bg_green"
          circleLine="03"
          title="BEYOND FUTURE"
          subTitle="우리는 미래에 더욱 중요해질 콘텐츠의 가치를 알고 있습니다."
          content="웹툰을 보는 독자들은 계속해서 늘어나고 있으며, 독자들을 울고 웃게 할 수 있는 멋진 작품을 만들어갈 수 있도록 웹툰 제작 프로젝트를 최선을 다해 이끌겠습니다."
          mainImg="images/img/main_img03_toon.png"
        />
      </div>
      <div className="main_btm_cont bg_space_img">
        <div className="cont_btm_wrap">
          <MainBtmImgWrap
            img="images/img/icon_rocket.png"
            imgAlt="로켓"
            marginTop="20"
          />
          <div className="main_text_area txt_align_center">
            <dl>
              <dt className="font_current">WE ARE IDEACONCERT</dt>
              <dd className="color02">
                우리는 “Always Joyful Imagination”이라는 슬로건으로 미래를
                이끌어갈 웹툰과 기술을 기발하는 회사입니다.
              </dd>
            </dl>
          </div>
          <MainBtmImgWrap
            img="images/img/img_acon_noran.png"
            imgAlt="아콘이와 노란이"
            marginTop="70"
            marginBottom="70"
          />
          <p>
            IDEACONCERT는 사람들의 다양한 아이디어와 생각이 모여 하나의 즐거운
            콘서트 무대가 된다는 의미를 담고 있습니다.
            <br />
            아콘이와 노란이는 <span>IDEACONCERT</span>를 상징하는 캐릭터로 하얀
            생쥐와 노란 병아리이며, 달콤한 간식과 그림을 그리는 것을 좋아합니다.
          </p>
          <MainBtmImgWrap
            img="images/img/img_allstar.png"
            imgAlt="아이디어콘서트 만화"
            marginTop="a"
          />
          <div className="main_btm_logo">
            <a href="http://ideaconcert.com/" target="_blank">
              <img
                src="images/layout/logo_round.png"
                className=""
                alt="아이디어콘서트 로고"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
