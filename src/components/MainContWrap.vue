<template>
  <div className="main_cont_wrap">
    <div className="wrap_1100">
      <div className="main_text_area">
        <dl>
          <dt className="font_current">{title}</dt>
          <dd className="color01">{subTitle}</dd>
        </dl>
        <div className="text_img_wrap">
          <img src="/images/img/icon_pencil.png" alt="스페이스 문구" />
        </div>
        <p>{content}</p>
      </div>
      <div
        className="main_img_area"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="main_img">
          <img src="{mainImg}" alt="캐릭터 이미지" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
