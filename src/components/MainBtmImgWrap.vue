<script setup>
defineProps({
  img: String,
  imgAlt: String,
  marginTop: String,
  marginBottom: String,
});
</script>

<template>
  <div
    :class="[
      `text_img_wrap ${marginTop && `mgt${marginTop}`} ${
        marginBottom && `mgb${marginBottom}`
      }`,
    ]"
  >
    <img :src="img" :alt="imgAlt" />
  </div>
</template>
