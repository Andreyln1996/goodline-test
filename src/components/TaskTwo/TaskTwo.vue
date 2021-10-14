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
      <div class="sensor-block__text">
        Комплекс из камеры и мобильного приложения,
        который помогает в любой момент убедиться, что с
        близкими и домом всё в порядке.
      </div>
    </section>

    <section class="task-two__block-info info-block">
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
            v-for="(option, i) in options"
            :key="i"
            :class="`buy-block__card_type${i+1}`"
            class="buy-block__card">
          <div
              :class="`buy-block__block-empty_type${i+1}`"
              class="buy-block__block-empty">
          </div>
          <img
              v-for="(icon, j) in option.icons"
              :key="j"
              :style="`grid-area: ${icon}`"
              :class="`buy-block__icons_type${i+1}`"
              :src="require(`../../img/buy-block__${icon}.svg`)"
              :alt="icon"
              class="buy-block__icons">
          <div
              :class="`buy-block__text_type${i+1}`"
              class="buy-block__text">
            <div class="buy-block__text_small">
              {{ option.title }}
            </div>
            <div>
              {{ option.text }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <TaskTwoInputPhone class="task-two__block-input"/>
    <TaskTwoReviews class="task-two__block-reviews"/>
  </div>
</template>

<script>
import TaskTwoPopUp from "./TaskTwoPopUp";
import TaskTwoInputPhone from "./TaskTwoInputPhone";
import TaskTwoReviews from "./TaskTwoReviews";

export default {
  name: "TaskTwo",
  components: {
    TaskTwoReviews,
    TaskTwoInputPhone, TaskTwoPopUp
  },
  data() {
    return {
      pop_up: null,
      open: null,
      options: [
        {text: 'Покупка', icons: ['cam']},
        {text: 'Рассрочка', icons: ['cal', 'cam']},
        {
          title: 'Пакет',
          text: '“Все\u00A0под\u00A0контролем”',
          icons: ['100mb', 'cam', 'wifi']
        },
        {
          title: 'Пакет',
          text: '“Тысяча\u00A0пятьсот”',
          icons: ['btv', '100mb', 'cam', 'wifi'],
        },
      ]
    }
  },

  methods: {
    actionSet(i) {
      this.pop_up = i
      this.open = true
    },
  }
}
</script>

<style lang="scss">
@import "src/assets/style";

.task-two {
  margin: 0 auto;
  padding: 40px 0 190px 0;
  max-width: 960px;

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
    font-size: 32px;
    line-height: 100%;
    @include roboto-condensed_700
  }

  &__text {
    width: 262px;
    font-size: 20px;
    line-height: 23px;
    @include roboto_700;
  }

  &__logo {
    width: 56px;
  }
}


.buy-block {
  &__title {
    margin-bottom: 40px;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: #313334;
    @include roboto-condensed_700;
  }

  &__grid-container {
    display: grid;
    gap: 35px;
    grid-template-columns: repeat(4, 1fr);
  }

  &__card {
    display: grid;
    justify-content: center;
    align-content: center;
    justify-items: center;
    height: 213.7px;
    width: 213.7px;
    border-radius: 18px;
    color: white;
    @include roboto_700;
    @include bg-gradient_green;

    &_type1 {
      grid-template-columns: 18%;
      grid-template-rows: 1fr 39% 26%;
      gap: 9%;
      grid-template-areas: 'empty''cam''text';
    }

    &_type2 {
      row-gap: 9%;
      column-gap: 8%;
      grid-template-columns: 28% 15%;
      grid-template-rows: 1fr 32% 26%;
      grid-template-areas: 'empty empty'
                            'cal cam'
                            'text text';
    }

    &_type3 {
      row-gap: 6.5%;
      column-gap: 8%;
      align-items: center;
      grid-template-columns: 21% 18% 20%;
      grid-template-rows: 15% 35% 21.5%;
      grid-template-areas:'empty empty empty'
                          '100mb cam wifi'
                          'text text text';

    }

    &_type4 {
      row-gap: 6%;
      column-gap: 8%;
      align-items: center;
      grid-template-columns: 21% 18% 20%;
      grid-template-rows: 15% 35% 21.5%;
      grid-template-areas: 'btv btv btv'
                            '100mb cam wifi'
                            'text text text';

    }
  }

  &__block-empty {
    grid-area: empty;

    &_type4 {
      display: none;
    }
  }

  &__icons {
    width: 100%;
    max-height: 100%;

    &_type1, &_type2 {
      align-self: end;
    }
  }

  &__text {
    grid-area: text;
    font-size: 20px;

    &_small {
      font-size: 18px;
      text-align: center;
    }
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
    border-radius: 18px;
    @include bg-gradient_green;

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
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #747474;
    @include roboto_700;
  }
}

@media (max-width: 425px) {
  .task-two {
    &__block-sensor {
      background: url('../../img/sensor-block__bg_mobile.png') 0 0/100% 100% no-repeat;
    }
  }
}

@media (max-width: 768px) {
  .task-two {
    padding: 0 0 52px 0;
    &__block-input {
      margin: 0 5px;
    }

    &__block-reviews {
      display: none;
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
      @include adaptive('line-height', 14, 23);
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
      justify-content: center;
      grid-template-columns: repeat(2, max-content);
      @include adaptive('gap', 15, 35);
      @include adaptive__2('margin', 0, 0, 21, 0);
    }

    &__card {
      @include adaptive('height', 160, 213.7);
      @include adaptive('width', 160, 213.7);

      &_type1 {
        order: 4;
      }
    }

    &__text {
      &_type3, &_type4 {
        @include adaptive('font-size', 14, 20);
      }

      &_small {
        @include adaptive('font-size', 14, 18);
      }
    }
  }
}
</style>
