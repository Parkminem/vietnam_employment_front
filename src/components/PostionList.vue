<script setup>
import store from "../store";
defineProps({
  count: Number,
  content: String,
  need: Number,
});
// console.log(store.state.applyForm);

const onChange = (e) => {
  if (
    [
      "contactChoice1",
      "contactChoice2",
      "contactChoice3",
      "contactChoice4",
    ].includes(e.target.id)
  ) {
    if (!store.state.applyForm.positions.includes(e.target.name)) {
      store.state.applyForm.positions.push(e.target.name);
    } else {
      store.state.applyForm.positions = store.state.applyForm.positions.filter(
        (pos) => pos !== e.target.name
      );
    }
  } else if (
    [
      "contactChoice5",
      "contactChoice6",
      "contactChoice7",
      "contactChoice8",
      "contactChoice",
    ].includes(e.target.id)
  ) {
    if (!store.state.applyForm.genres.includes(e.target.name)) {
      store.state.applyForm.genres.push(e.target.name);
    } else {
      store.state.applyForm.genres = store.state.applyForm.genres.filter(
        (pos) => pos !== e.target.name
      );
    }
  }
};
</script>

<template>
  <li>
    <input
      type="checkbox"
      :id="`contactChoice${count}`"
      :name="content"
      :required="need"
      @change="onChange"
    /><label :for="`contactChoice${count}`">
      <span>{{ content }}</span>
    </label>
  </li>
</template>
