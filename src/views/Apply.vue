<script setup>
import HeaderWrap from "../components/HeaderWrap.vue";
import TopTitWrap from "../components/TopTitWrap.vue";
import InputGroupTitle from "../components/InputGroupTitle.vue";
import InputGroup from "../components/InputGroup.vue";
import BottomBtn from "../components/BottomBtn.vue";
</script>
<template>
  <HeaderWrap />
  <div class="sub_wrap">
    <div class="sub_cont_wrap">
      <TopTitWrap
        title="지원 하기"
        content="아이디어콘서트는 지금 웹툰작가 모집중! 좋은 웹툰을 만들어나갈 수 있도록 함께 해주세요."
      />
      <div class="sub_cont_area">
        <form>
          <div class="input_set_wrap">
            <InputGroupTitle
              :step="1"
              content="지원서 작성하기 (* 표시는 필수 사항 입니다.)"
            />
            <InputGroup
              category="position"
              title="포지션(중복가능)"
              :require="true"
            />
            <InputGroup category="name" title="이름" :require="true" />
            <InputGroup category="nickname" title="필명" :require="true" />
            <InputGroup category="mail" title="이메일 주소" :require="true" />
            <InputGroup category="number" title="연락처" :require="true" />
            <InputGroup category="country" title="거주 국가" />
            <InputGroup
              category="genre"
              title="선호 장르(중복가능)"
              :require="true"
            />
            <InputGroup category="intro" title="자기 소개" />
            <InputGroup category="portfolio_url" title="포트폴리오 사이트" />
            <InputGroup category="file" title="파일 업로드" />
          </div>
          <div class="txt_box_wrap">
            <div class="txt_box">
              <h5>유의사항</h5>
              <ul>
                <li>
                  지원하는 포지션에 맞는 그림 포트폴리오를 꼭 첨부하여 주세요.
                </li>
                <li>
                  포트폴리오는 jpg 또는 png 파일, pdf파일로 한 폴더에 압축하여
                  첨부해 주세요. 최대 용량은 100mb이내입니다.
                </li>
              </ul>
            </div>
          </div>
          <div class="agree_box_wrap">
            <input
              type="checkbox"
              name="agree_check"
              id="agree_check"
              required
            />
            <label for="agree_check">
              <span>위 개인 정보수집 · 이용에 동의합니다.</span>
            </label>
          </div>
          <div class="btn_wrap">
            <BottomBtn route="/" color="btn_line" content="취소" />
            <BottomBtn
              route="/applycomplete"
              color="btn_color_bg"
              content="확인"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- <Modal /> -->
</template>
