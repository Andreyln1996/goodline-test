<template>
  <div class="task-two">
    <section class="task-two__block-sensor sensor-block">
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
    </section>

    <section

        class="task-two__block-info info-block">
      <TaskTwoPopUp
          :open="open"
          :pop_up="pop_up"
          :class="{'info-block__pop-up_right': pop_up === 1,
                   'info-block__pop-up_left': pop_up === 2}"
          class="info-block__pop-up"
          @close="open = null"/>
      <div
          v-for="i in 2"
          :key="i"
          :class="{'info-block__block-speaker_grey': open}"
          class="info-block__block-speaker"
          @click="actionSet(i)">
        <img
            class="info-block__speaker"
            src="../../img/info-block__speaker.png"
            alt="speaker"/>
        <p class="info-block__signature">
          ПОДРОБНЕЕ
        </p>
      </div>
    </section>

    <section class="task-two__block-buy buy-block">
      <div class="buy-block__title">
        Приобрести
      </div>
      <div class="buy-block__grid-container">
        <div
            v-for="i in 4"
            :key="i"
            class="buy-block__card">
        </div>
      </div>
    </section>
    <TaskTwoInputPhone class="task-two__block-input"/>
  </div>
</template>

<script>
import TaskTwoPopUp from "./TaskTwoPopUp";
import TaskTwoInputPhone from "./TaskTwoInputPhone";

export default {
  name: "TaskTwo",
  components: {TaskTwoInputPhone, TaskTwoPopUp},
  data() {
    return {
      pop_up: null,
      open: null,
    }
  },

  methods: {
    actionSet(i) {
      this.pop_up = i
      this.open = true
    }
  }
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
    margin-bottom: 103px;
    height: 408px;
    padding: 46px;
    background: url('../../img/sensor-block__background-image.png') 0 0/100% 100% no-repeat;
  }

  &__block-info {
    margin-bottom: 103px;
  }

  &__block-buy {
    margin-bottom: 107px;
  }

  &__block-input {
    margin: 0 auto 124px auto;
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


.buy-block {
  &__title {
    margin-bottom: 40px;
    font-family: Roboto Condensed, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: #313334;
  }

  &__grid-container {
    //justify-items: center;
    display: grid;
    gap: 35px;
    //overflow-x: scroll;
    grid-template-columns: repeat(4, 1fr);
  }

  &__card {
    width: 100%;
    height: 213.7px;
    background: linear-gradient(180deg, #8CB928 0%, #45AE4D 100%);
    border-radius: 18px;
  }
}


.info-block {
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 0 45px;

  &__pop-up {
    position: absolute;
    z-index: 999;

    &_right {
      right: 0;
      top: -37px;
    }

    &_left {
      left: 0;
      top: -37px;
    }
  }

  &__block-speaker {
    transition: 0.2s;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 80px 90px;
    background: linear-gradient(180deg, #8CB928 0%, #45AE4D 100%);
    border-radius: 18px;

    &_grey {
      filter: grayscale(100%);
      opacity: 0.5;
    }
  }

  &__speaker {
    width: 210px;
  }

  &__signature {
    position: absolute;
    top: calc(100% + 15px);
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #747474;
  }

}

@media (max-width: 425px) {
  .task-two {
    &__block-sensor {
      background: url('../../img/sensor-block__bg_mobile.png') 0 0/100% 100% no-repeat;
    }
  }
  //.buy-block {
  //  &__grid-container {
  //    overflow-x: visible;
  //    grid-template-columns: repeat(2, 1fr);
  //  }
  //}
}

@media (max-width: 768px) {
  .task-two {
    &__block-input {
      margin: 0 5px;
    }
  }
  .info-block {
    &__signature {
      display: none;
    }

    &__pop-up {
      position: fixed;
      height: 100%;
      overflow-y: scroll;
      top: 0;
    }
  }

  .buy-block {
    &__grid-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

}

@media (max-width: 960px) {
  .task-two {
    &__block-sensor {
      @include adaptive('margin-bottom', 30, 103);
      @include adaptive("padding", 14, 46);
      @include adaptive('height', 208, 408);
    }

    &__block-info {
      @include adaptive('margin-bottom', 30, 103);
    }

    &__block-buy {
      @include adaptive('margin-bottom', 60, 109);
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

  .info-block {
    @include adaptive__2('padding', 0, 0, 52, 45);

    &__block-speaker {
      @include adaptive__2('padding', 44, 80, 35, 90)
    }

    &__speaker {
      @include adaptive('width', 50, 210)
    }
  }

  .buy-block {

    &__grid-container {
      margin: 0 21px;
      //grid-template-columns: repeat(2, 1fr);
      //@include adaptive__2('padding', 0, 0, 21, 0);
      @include adaptive('gap', 15, 35);
    }

    &__card {
      //@include adaptive('width', 160, 213.7);
      @include adaptive('height', 160, 213.7);
    }
  }
}
</style>
