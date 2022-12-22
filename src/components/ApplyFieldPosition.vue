<script setup>
import { useStore } from "vuex";
import CategoryList from "./CategoryList.vue";
const store = useStore();

const data = [
  {
    index: 1,
    title: "데생 콘티",
    leftContent: "그림 콘티",
    leftImg: "images/img/drawing01_storyboard.png",
    rightContent: "데생 콘티",
    rightImg: "images/img/drawing02_dessin.png",
    contents: [
      "그림콘티를 데생콘티로 제작하는 작업 입니다.",
      "아이디어콘서트에서 제공한 그림 콘티를 데생 콘티로 작업을 할수 있는 작가를 찾습니다.",
    ],
  },
  {
    index: 2,
    title: "선화",
    leftContent: "데생 콘티",
    leftImg: "images/img/drawing02_dessin.png",
    rightContent: "선화",
    rightImg: "images/img/drawing03_line.png",
    contents: [
      "데생 콘티를 선화로 제작하는 작업입니다.",
      "캐릭터의 매력을 살려 세밀하게 펜선으로 강약을 표현해 그려내는 파트입니다.",
    ],
  },
  {
    index: 3,
    title: "채색 및 보정",
    leftContent: "선화",
    leftImg: "images/img/drawing03_line.png",
    rightContent: "채색 및 보정",
    rightImg: "images/img/drawing04_color.png",
    contents: [
      "선화위에 채색 하는 작업입니다.",
      "라인아트 위에 채색을 입혀 웹툰을 생생하게 입혀내는 파트입니다.",
    ],
  },
  {
    index: 4,
    title: "배경 아트",
    leftContent: "작업이 안된 배경",
    leftImg: "images/img/drawing05_bg_before.png",
    rightContent: "배경 작업 및 보정",
    rightImg: "images/img/drawing06_bg_after.png",
    contents: [
      "웹툰의 배경을 제작하는 작업입니다.",
      "표현이 제대로 되어 있지 않은 기본 배경을 작품의 분위기에 맞게 채색하고 연출하는 파트입니다.",
    ],
  },
];
</script>
<template>
  <div>
    <a :name="store.state.categoryIndex"></a>
    <div class="position_info_wrap">
      <div class="category_tab_wrap">
        <ul>
          <CategoryList
            v-for="i in data"
            :index="i.index"
            :active="i.index == store.state.categoryIndex ? true : false"
            :content="i.title"
          />
        </ul>
      </div>
      <div class="position_detail_wrap">
        <div class="detail_number_wrap">
          <div class="detail_number">{{ store.state.categoryIndex }}</div>
        </div>
        <h3>{{ data[store.state.categoryIndex - 1].title }}</h3>
        <div class="before_after_img_wrap">
          <ul>
            <li>
              <div class="before_after_img">
                <img
                  :src="data[store.state.categoryIndex - 1].leftImg"
                  :alt="data[store.state.categoryIndex - 1].leftContent"
                />
              </div>
              <div class="before_after_txt">
                {{ data[store.state.categoryIndex - 1].leftContent }}
              </div>
            </li>
            <li>
              <div class="before_after_img active">
                <img
                  :src="data[store.state.categoryIndex - 1].rightImg"
                  :alt="data[store.state.categoryIndex - 1].rightContent"
                />
              </div>
              <div class="before_after_txt active">데생 콘티</div>
            </li>
          </ul>
        </div>
        <div class="position_detail_info">
          <p>
            {{ data[store.state.categoryIndex - 1].contents[0] }}<br />
            {{ data[store.state.categoryIndex - 1].contents[1] }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
