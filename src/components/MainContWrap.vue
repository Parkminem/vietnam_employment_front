<template>
  <div :class="[`main_cont_wrap ${bgColor}`]">
    <div class="wrap_1100">
      <div
        :class="[
          `main_text_area circleline${circleLine} ${
            flexOrder && `flex_order${flexOrder}`
          }`,
        ]"
      >
        <dl>
          <dt class="font_current">{{ title }}</dt>
          <dd class="color01">{{ subTitle }}</dd>
        </dl>
        <div class="text_img_wrap">
          <img src="@/assets/images/img/icon_pencil.png" alt="스페이스 문구" />
        </div>
        <p>{{ content }}</p>
      </div>
      <div class="main_img_area" data-aos="fade-up" data-aos-duration="2000">
        <div class="main_img">
          <img :src="mainImg" alt="캐릭터 이미지" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  bgColor: String,
  circleLine: String,
  title: String,
  subTitle: String,
  flexOrder: String,
  content: String,
  mainImg: String,
});
</script>
