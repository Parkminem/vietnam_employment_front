<script setup>
import store from "../store";
import CategoryList from "./CategoryList.vue";

const data = [
  {
    index: 1,
    leftImg: "images/img/drawing01_storyboard.png",
    rightImg: "images/img/drawing02_dessin.png",
  },
  {
    index: 2,
    leftImg: "images/img/drawing02_dessin.png",
    rightImg: "images/img/drawing03_line.png",
  },
  {
    index: 3,
    leftImg: "images/img/drawing03_line.png",
    rightImg: "images/img/drawing04_color.png",
  },
  {
    index: 4,
    leftImg: "images/img/drawing05_bg_before.png",
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
            :active="i.index == store.state.categoryIndex ? true : false"
            :content="$t(`applyField.applyFieldPosition.${i.index}.title`)"
          />
        </ul>
      </div>
      <div class="position_detail_wrap">
        <div class="detail_number_wrap">
          <div class="detail_number">{{ store.state.categoryIndex }}</div>
        </div>
        <h3>
          {{
            $t(
              `applyField.applyFieldPosition.${store.state.categoryIndex}.title`
            )
          }}
        </h3>
        <div class="before_after_img_wrap">
          <ul>
            <li>
              <div class="before_after_img">
                <img
                  :src="data[store.state.categoryIndex - 1].leftImg"
                  :alt="
                    $t(
                      `applyField.applyFieldPosition.${store.state.categoryIndex}.leftContent`
                    )
                  "
                />
              </div>
              <div class="before_after_txt">
                {{
                  $t(
                    `applyField.applyFieldPosition.${store.state.categoryIndex}.leftContent`
                  )
                }}
              </div>
            </li>
            <li>
              <div class="before_after_img active">
                <img
                  :src="data[store.state.categoryIndex - 1].rightImg"
                  :alt="
                    $t(
                      `applyField.applyFieldPosition.${store.state.categoryIndex}.rightContent`
                    )
                  "
                />
              </div>
              <div class="before_after_txt active">
                {{
                  $t(
                    `applyField.applyFieldPosition.${store.state.categoryIndex}.rightContent`
                  )
                }}
              </div>
            </li>
          </ul>
        </div>
        <div class="position_detail_info">
          <p
            v-html="
              $t(
                `applyField.applyFieldPosition.${store.state.categoryIndex}.content`
              )
            "
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>
