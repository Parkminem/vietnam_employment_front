<script setup>
import CategoryList from "./CategoryList.vue";
import { useStore } from "vuex";
const store = useStore();

const data = [
  {
    index: 1,
    title: "데생 콘티",
    leftContent: "그림 콘티",
    leftImg: "images/img/drawing01_storyboard.png",
    rightContent: "데생 콘티",
    rightImg: "images/img/drawing02_dessin.png",
  },
  {
    index: 2,
    title: "선화",
    leftContent: "데생 콘티",
    leftImg: "images/img/drawing02_dessin.png",
    rightContent: "선화",
    rightImg: "images/img/drawing03_line.png",
  },
  {
    index: 3,
    title: "채색 및 보정",
    leftContent: "선화",
    leftImg: "images/img/drawing03_line.png",
    rightContent: "채색 및 보정",
    rightImg: "images/img/drawing04_color.png",
  },
  {
    index: 4,
    title: "배경 아트",
    leftContent: "작업이 안된 배경",
    leftImg: "images/img/drawing05_bg_before.png",
    rightContent: "배경 작업 및 보정",
    rightImg: "images/img/drawing06_bg_after.png",
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
            :active="[i.index == store.state.categoryIndex ? true : false]"
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
                  :src="[data[store.state.categoryIndex - 1].leftImg]"
                  :alt="[data[store.state.categoryIndex - 1].leftContent]"
                />
              </div>
              <div class="before_after_txt">
                {{ data[store.state.categoryIndex - 1].leftContent }}
              </div>
            </li>
            <li>
              <div class="before_after_img active">
                <img
                  :src="[data[store.state.categoryIndex - 1].rightImg]"
                  :alt="[data[store.state.categoryIndex - 1].rightContent]"
                />
              </div>
              <div class="before_after_txt active">데생 콘티</div>
            </li>
          </ul>
        </div>
        <div class="position_detail_info">
          <p>
            그림콘티를 데생콘티로 제작하는 작업 입니다.<br />
            아이디어콘서트에서 제공한 그림 콘티를 데생 콘티로 작업을 할 수 있는
            작가를 찾습니다.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
