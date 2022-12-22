<script setup>
import PostionCategoryList from "./PostionCategoryList.vue";
defineProps({
  index: Number,
});
const data = [
  {
    index: 1,
    content: "데생 콘티",
    leftContent: "그림 콘티",
    rightContent: "데생 콘티",
  },
  { index: 2, content: "선화" },
  { index: 3, content: "채색 및 보정" },
  { index: 4, content: "배경 아트" },
];
</script>
<template>
  <a :name="index"></a>
  <div class="position_info_wrap">
    <div class="category_tab_wrap">
      <ul>
        <PostionCategoryList
          v-for="i in data"
          :active="[i.index == index ? true : false]"
          :content="i.content"
        />
      </ul>
    </div>
    <div class="position_detail_wrap">
      <div class="detail_number_wrap">
        <div class="detail_number">{{ index }}</div>
      </div>
      <h3>{{ data[index - 1].content }}</h3>
      <div class="before_after_img_wrap">
        <ul>
          <li>
            <div class="before_after_img">
              <img src="images/img/drawing01_storyboard.png" alt="그림 콘티" />
            </div>
            <div class="before_after_txt">그림 콘티</div>
          </li>
          <li>
            <div class="before_after_img active">
              <img src="images/img/drawing02_dessin.png" alt="데생 콘티" />
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
</template>
