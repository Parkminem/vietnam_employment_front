<script setup>
import PostionList from "./PostionList.vue";

defineProps({
  category: String,
  need: Boolean,
  title: String,
  color: String,
});
</script>

<template>
  <div class="input_group">
    <div :class="`input_categry ${color && color}`">
      <label :for="`add_${category}`">
        <span v-if="need">*</span>
        {{ title }}
      </label>
    </div>
    <input
      v-if="category === 'name'"
      type="text"
      id="add_name"
      placeholder="이름을 기입해 주세요"
      required
    />
    <input
      v-else-if="category === 'nickname'"
      type="text"
      required
      id="add_nickname"
      placeholder="필명을 기입해 주세요."
    />
    <input
      v-else-if="category === 'mail'"
      type="email"
      required
      id="add_mail"
      placeholder="예) ideacon@ideaconcert.com"
    />
    <input
      v-else-if="category === 'number'"
      type="tel"
      pattern="[0-9]+"
      required
      id="add_number"
      placeholder="' - '없이 입력해 주세요"
    />
    <input
      v-else-if="category === 'country'"
      type="text"
      required
      id="add_country"
      placeholder="SOUTH KOREA"
    />
    <div v-else-if="category === 'intro'" className="intro_txtarea">
      <textarea></textarea>
    </div>
    <input
      v-else-if="category === 'portfolio_url'"
      type="text"
      required
      id="add_portfolio_url"
      placeholder="http:// "
    />
    <input v-else-if="category === 'file'" type="file" required id="add_file" />
    <ul v-else-if="category === 'position'" className="input_group_ul">
      <postion-list :count="1" content="LiNE ART" />
      <postion-list :count="2" content="COLOR ART" />
      <postion-list :count="3" content="SKETCH UP" />
      <postion-list :count="4" content="BACKGROUND ART" />
    </ul>
    <ul v-else-if="category === 'genre'" className="input_group_ul">
      <postion-list :count="5" content="DRAMA" />
      <postion-list :count="6" content="FANTASY" />
      <postion-list :count="7" content="ACTION" />
      <postion-list :count="8" content="ROMANCE" />
      <postion-list :count="9" content="ADULT" />
    </ul>
  </div>
</template>
