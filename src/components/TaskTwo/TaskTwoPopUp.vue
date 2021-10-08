<template>
  <div class="task-two-pop-up">
    <div class="task-two-pop-up__cross">
      <img
          src="../../img/pop-up__cross.svg"
          alt="cross"/>
    </div>
    <div
        v-for="(option, i) in options"
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

</template>

<script>
export default {
  name: "TaskTwoPopUp",

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
      ]
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/style";

.task-two-pop-up {
  margin-left: 87px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  max-width: 720px;
  padding: 40px;
  background: linear-gradient(180deg, #8CB928 0%, #45AE4D 100%);
  border-radius: 18px;

  &__cross {
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -87px;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    @include bg-gradient_green;
  }

  &__block {
    padding: 35px 18px;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 18px;
    //max-width: 311px;
    @include roboto_20-bold;
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

  &__icon {
    width: 60%;
  }

}

@media (max-width: 768px) {
  .task-two-pop-up {
    margin-left: 0;
    width: 100%;
    max-width: none;
    grid-template-columns: 1fr;

    &__cross {
      display: none;
    }

  }
}

@media (max-width: 960px) {
  .task-two-pop-up {
    @include adaptive('padding', 28, 40);

    &__bg-icon {
      @include adaptive('min-width', 114, 126);
      @include adaptive('height', 114, 126)
    }
  }

}

</style>