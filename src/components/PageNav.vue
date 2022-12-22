<template>
  <li>
    <RouterLink to="/" onClick="{setHide}"> {{ name }}</RouterLink>
  </li>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  props: {
    bgColor: String,
    route: String,
    name: String,
  },
  // setup(props) {

  // }
};
</script>
