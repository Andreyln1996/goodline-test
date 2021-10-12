<template>
  <transition name="fade">`
    <div
        v-if="open"
        :class="{'task-two-pop-up_right': pop_up === 1,
                 'task-two-pop-up_left': pop_up === 2}"
        class="task-two-pop-up">
      <div class="task-two-pop-up__container">
        <div
            v-for="(option, i) in selectedOption"
            :key="i"
            class="task-two-pop-up__block">
          <div class="task-two-pop-up__bg-icon">
            <img
                class="task-two-pop-up__icon"
                v-if="option.icon"
                :src="require(`../../img/pop-up__${option.icon}.svg`)"
                alt="icon">
          </div>
          {{ option.text }}
        </div>
      </div>

      <div
          :class="{'task-two-pop-up__cross_right': pop_up === 1,
                  'task-two-pop-up__cross_left': pop_up === 2}"
          class="task-two-pop-up__cross"
          @click="$emit('close')">
        <img
            src="../../img/pop-up__cross.svg"
            alt="cross"/>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "TaskTwoPopUp",
  props: {
    pop_up: Number,
    open: Boolean,
  },

  computed: {
    selectedOption() {
      if (this.pop_up === 1) {
        return this.options
      } else if (this.pop_up === 2) {
        return this.options_two
      } else return ''
    }
  },

  data() {
    return {
      options: [
        {
          text: 'Работает по Wi-Fi или кабелю',
          icon: 'wifi'
        },

        {
          text: 'Разрешение 1280х960 (HD)',
          icon: 'hd'
        },

        {
          text: 'Ночная съемка',
          icon: 'night-rec'
        },

        {
          text: 'Запись звука и видео',
          icon: 'rec'
        },

        {
          text: 'Угол обзора 100°',
          icon: '100'
        },

        {
          text: 'Длина кабеля 1.5\u00A0метра',
          icon: null
        },
      ],

      options_two: [
        {
          text: 'Уведомление на телефон о\u00A0движении',
          icon: 'go'
        },

        {
          text: 'Хранение данных на защищенных серверах',
          icon: 'save-data'
        },

        {
          text: 'Совместный доступ  у\u00A0членов семьи\n',
          icon: 'family'
        },

        {
          text: 'Скачивание/удаление архивных записей',
          icon: 'mobile'
        },

        {
          text: 'Доступ из\u00A0любой точки\u00A0мира',
          icon: 'map'
        },

        {
          text: 'Уведомление о приходе «Домашних»',
          icon: 'bell'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/style";

.task-two-pop-up {
  transition: 0.4s;
  max-width: 720px;

  &_right {
    margin-left: 87px;
  }

  &_left {
    margin-right: 87px;
  }

  &__container {
    padding: 40px;
    border-radius: 18px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    @include bg-gradient_green
  }


  &__cross {
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    @include bg-gradient_green;

    &_right {
      left: -87px;
    }

    &_left {
      right: -87px;
    }
  }

  &__block {
    padding: 35px 18px;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 18px;
    //max-width: 311px;
    font-size: 20px;
    line-height: 23px;
    @include roboto_700;
  }

  &__bg-icon {
    margin-right: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 126px;
    width: 126px;
    height: 126px;
    border-radius: 50%;
    background: linear-gradient(180deg, #8BB928 0%, #45AE4D 100%);
    box-shadow: 0 10px 40px #45AE4D;
  }

  //&__icon {
  //  width: 60%;
  //}

}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .task-two-pop-up {
    background-color: white;

    &__container {
      grid-template-columns: 1fr;
    }

    margin-left: 0;
    width: 100%;
    max-width: none;

    &__cross {
      position: static;
      margin: 16px auto;
      //top: calc(100% + 68px);
      //left: 0;
      //right: 0;
    }

  }
}

@media (max-width: 960px) {
  .task-two-pop-up {
    &__container {
      @include adaptive('padding', 28, 40);

    }

    //&__bg-icon {
    //  @include adaptive('max-width', 114, 126);
    //  @include adaptive('height', 114, 126)
    //}
  }

}

</style>