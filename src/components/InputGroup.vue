<script setup>
import PostionList from "./PostionList.vue";
import store, { ATTACHFILE } from "../store";

defineProps({
  category: String,
  need: Boolean,
  title: String,
  color: String,
});

const changeFile = (e) => {
  store.commit(ATTACHFILE, e.target.files[0]);
};

const applyForm = store.state.applyForm;
</script>

<template>
  <div class="input_group" v-if="!color">
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
      :placeholder="$t('apply.inputGroup.name.placeHolder')"
      v-model="store.state.applyForm.full_name"
      :required="need"
    />
    <input
      v-else-if="category === 'nickname'"
      type="text"
      :required="need"
      id="add_nickname"
      v-model="store.state.applyForm.pen_name"
      :placeholder="$t('apply.inputGroup.nickname.placeHolder')"
    />
    <input
      v-else-if="category === 'mail'"
      type="email"
      :required="need"
      id="add_mail"
      v-model="store.state.applyForm.email"
      :placeholder="$t(`apply.inputGroup.mail.placeHolder`)"
    />
    <input
      v-else-if="category === 'number'"
      type="tel"
      pattern="[0-9]+"
      :required="need"
      id="add_number"
      v-model="store.state.applyForm.phone_number"
      :placeholder="$t('apply.inputGroup.number.placeHolder')"
    />
    <input
      v-else-if="category === 'country'"
      type="text"
      :required="need"
      id="add_country"
      v-model="store.state.applyForm.region"
      :placeholder="$t('apply.inputGroup.country.placeHolder')"
    />
    <div v-else-if="category === 'intro'" class="intro_txtarea">
      <textarea v-model="store.state.applyForm.about"></textarea>
    </div>
    <input
      v-else-if="category === 'portfolio_url'"
      type="text"
      :required="need"
      id="add_portfolio_url"
      v-model="store.state.applyForm.portfolio"
      :placeholder="$t('apply.inputGroup.portfolio.placeHolder')"
    />
    <input
      v-else-if="category === 'file'"
      @change="changeFile"
      type="file"
      :required="need"
      id="add_file"
    />
    <ul v-else-if="category === 'position'" className="input_group_ul">
      <postion-list
        :count="1"
        content="LINE ART"
        :need="!store.state.applyForm.positions.length"
      />
      <postion-list :count="2" content="COLOR ART" />
      <postion-list :count="3" content="SKETCH UP" />
      <postion-list :count="4" content="BACKGROUND ART" />
    </ul>
    <ul v-else-if="category === 'genre'" className="input_group_ul">
      <postion-list
        :count="5"
        content="DRAMA"
        :need="!store.state.applyForm.genres.length"
      />
      <postion-list :count="6" content="FANTASY" />
      <postion-list :count="7" content="ACTION" />
      <postion-list :count="8" content="ROMANCE" />
      <postion-list :count="9" content="ADULT" />
    </ul>
  </div>
  <div v-else class="input_group">
    <div :class="`input_categry ${color && color}`">
      <label :for="`add_${category}`">
        <span v-if="need">*</span>
        {{ title }}
      </label>
    </div>

    <div v-if="category === 'name'" class="input_cont_box_wrap">
      {{ applyForm.full_name }}
    </div>
    <div v-else-if="category === 'nickname'" class="input_cont_box_wrap">
      {{ applyForm.pen_name }}
    </div>
    <div v-else-if="category === 'mail'" class="input_cont_box_wrap">
      {{ applyForm.email }}
    </div>
    <div v-else-if="category === 'number'" class="input_cont_box_wrap">
      {{ applyForm.phone_number }}
    </div>
    <div v-else-if="category === 'country'" class="input_cont_box_wrap">
      {{ applyForm.region }}
    </div>
    <div v-else-if="category === 'intro'" class="input_cont_box_wrap">
      {{ applyForm.about }}
    </div>
    <div v-else-if="category === 'portfolio_url'" class="input_cont_box_wrap">
      {{ applyForm.portfolio }}
    </div>
    <div v-else-if="category === 'file'" class="input_cont_box_wrap">
      {{
        Array.isArray(applyForm.files)
          ? applyForm.files[0].slice(6)
          : applyForm.files?.name
      }}
    </div>
    <div v-else-if="category === 'genre'" class="input_cont_box_wrap">
      {{ applyForm.genres.join(", ") }}
    </div>
    <div v-else-if="category === 'position'" class="input_cont_box_wrap">
      {{ applyForm.positions.join(", ") }}
    </div>
  </div>
</template>
