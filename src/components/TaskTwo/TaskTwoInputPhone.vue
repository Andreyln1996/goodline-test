<template>
  <section class="task-two-input-phone">
    <p
        v-if="!send"
        class="task-two-input-phone__title">
      Оставьте заявку, и мы позвоним вам в ближайшее время
    </p>

    <p
        v-else
        class="task-two-input-phone__title-2">
      Спасибо, что оставили заявку. <br>
      Мы скоро вам перезвоним.
    </p>
    <form
        v-if="!send"
        id="data"
        action="https://myjson.com"
        method="post"
        class="task-two-input-phone__form"
        @submit.prevent="checkForm()">
      <input
          v-mask="'+7 999 999 9999'"
          placeholder="+7 ___ ___ ____"
          v-model="phone"
          class="task-two-input-phone__input"
          :class="{
            'task-two-input-phone__input_filled': filledInput,
            'task-two-input-phone__input_error': error,
            }"
          type="tel">
      <div
          v-if="!error"
          class="task-two-input-phone__help-text">
        Контактный телефон
      </div>
      <div
          v-else
          class="task-two-input-phone__help-text
                 task-two-input-phone__help-text_error">
        Проверьте набранный номер
      </div>
    </form>
    <button
        :disabled="send"
        form="data"
        type="submit"
        class="task-two-input-phone__button"
        :class="{'task-two-input-phone__button_disabled': send}">
      Отправить заявку
      <img
          class="task-two-input-phone__ic-send"
          src="../../img/input-phone__ic-send.svg"
          alt=">">
    </button>
  </section>
</template>

<script>
export default {
  name: "TaskTwoInputPhone",
  data() {
    return {
      phone: null,
      error: null,
      send: null,
    }
  },

  computed: {
    filledInput() {
      return this.validPhone() && this.phone.length > 1
    }
  },

  methods: {
    validPhone() {
      let re = /^[\s0-9(+)-]*$/;
      return re.test(this.phone)
    },

    checkForm() {
      if (!this.filledInput) this.error = true
      else this.send = true
    }
  },

  watch: {
    phone() {
      if (this.error) this.error = false
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/style";

.task-two-input-phone {
  padding: 40px 0;
  height: 332px;
  max-width: 872px;
  background: #FFFFFF;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &__title {
    max-width: 360px;
    text-align: center;
    font-size: 20px;
    line-height: 23px;
    @include roboto_700;
  }

  &__title-2 {
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    margin-top: 40px;
    @include roboto_700;
  }

  &__form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  &__input {
    width: 276px;
    height: 60px;
    padding: 0 24px;
    font-size: 27px;
    line-height: 42px;
    text-align: center;
    border: 3px solid #DAE0E5;
    border-radius: 4px;
    @include roboto_700;

    &:focus {
      border-color: #47B247;
      box-shadow: 0 0 24px rgba(0, 152, 16, 0.25),
      0 24px 24px rgba(0, 152, 16, 0.25);
    }

    &_filled {
      border: 4px solid #47B247 !important;
      box-shadow: none !important;
    }

    &_error {
      color: #BF4444 !important;
      border: 4px solid #BF4444 !important;
      box-shadow: none !important;

      &::placeholder {
        color: #BF4444;
      }
    }
  }

  &__help-text {
    position: absolute;
    bottom: -28px;
    margin: auto;
    color: #DAE0E5;
    text-align: center;
    @include roboto_400;

    &_error {
      color: #313334;

      &:before {
        content: '!';
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 2px;
        font-weight: 900;
        color: white;
        width: 21px;
        height: 21px;
        border-radius: 50%;
        background-color: #BF4444;
      }
    }
  }

  &__button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 276px;
    height: 60px;
    background: #72BF44;
    border-radius: 4px;
    color: white;
    font-size: 22px;
    line-height: 26px;
    text-transform: uppercase;
    @include roboto_400;

    &_disabled {
      background-color: #DAE0E5;
      cursor: default;
    }
  }

  &__ic-send {
    width: 31px;
    margin-left: 9px;
  }
}

@media (max-width: 960px) {
  .task-two-input-phone {
    &__title {
      @include adaptive('font-size', 18, 20);
      @include adaptive('line-height', 21, 23)
    }

    &__title-2 {
      @include adaptive('font-size', 20, 36);
      @include adaptive('line-height', 36, 42)

    }

    &__input {
      @include adaptive('width', 240, 276);
      @include adaptive__2('padding', 0, 0, 20, 24);
      @include adaptive('font-size', 18, 27);
      @include adaptive('line-height', 21, 42);
    }

    &__help-text {
      @include adaptive('font-size', 15, 18);

      &:before {
        @include adaptive('height', 18, 21);
        @include adaptive('width', 18, 21);
      }
    }

    &__button {
      @include adaptive('font-size', 18, 22);
      @include adaptive('line-height', 21, 25);
    }
  }
}

</style>