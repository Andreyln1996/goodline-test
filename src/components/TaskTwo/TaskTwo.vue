<template>
  <div class="task-two">
    <div class="task-two__block-sensor sensor-block">
      <div class="sensor-block__block-title">
        <img
            class="sensor-block__logo"
            src="../../img/sensor-block__logo.svg"
            alt="logo">
        <span class="sensor-block__title">
            Датчик <br> спокойствия
        </span>
      </div>
      <div class="sensor-block__text _text">
        Комплекс из камеры и мобильного приложения,
        который помогает в любой момент убедиться, что с
        близкими и домом всё в порядке.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskTwo"
}
</script>

<style lang="scss">
@import "src/assets/style";

.task-two {
  margin: 40px auto 0 auto;
  //width: 100%;
  max-width: 960px;
  height: 100%;
  //background-color: red;

  &__block-sensor {
    height: 408px;
    padding: 46px;
    background: url('../../img/sensor-block__background-image.png') 0 0/100% 100% no-repeat;
  }
}

.sensor-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__block-title {
    display: flex;
    align-items: center;
  }

  &__title {
    display: flex;
    align-items: end;
    margin-left: 16.6px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
  }

  &__text {
    width: 262px;
  }

  &__logo {
    width: 56px;
  }
}

@media (max-width: 425px) {
  .task-two {
    &__block-sensor {
      background: url('../../img/sensor-block__bg_mobile.png') 0 0/100% 100% no-repeat;
    }
  }
}

@media (max-width: 960px) {
  .task-two {
    &__block-sensor {
      @include adaptive("padding", 14, 46);
      @include adaptive('height', 208, 408);
    }
  }

  .sensor-block {
    &__logo {
      @include adaptive('width', 23, 56)
    }

    &__title {
      @include adaptive('margin-left', 7, 16.6);
      @include adaptive('font-size', 13, 29)
    }

    &__text {
      @include adaptive('font-size', 12, 20);
      @include adaptive('width', 125, 262);
    }
  }
}
</style>
