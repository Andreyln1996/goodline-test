<template>
  <section class="task-two-reviews">
    <div class="task-two-reviews__title">
      Отзывы
    </div>
    <div
        v-for="(review,i) in reviews"
        :key="i"
        :class="{'task-two-reviews__container_back':
                  review_back === i }"
        class="task-two-reviews__container"
        @click="review_back = i">
      <div class="task-two-reviews__circle
                  task-two-reviews__circle_big">
        <div class="task-two-reviews__circle
                    task-two-reviews__circle_middle">
          <div class="task-two-reviews__circle
                    task-two-reviews__circle_small">
            <img
                class="task-two-reviews__avatar"
                :src="require(`../../img/${review.avatar}.png`)"
                alt="avatar"/>
          </div>
        </div>
      </div>

      <div class="task-two-reviews__name">
        {{ review.name }}
      </div>

      <div class="task-two-reviews__text">
        {{ review.reviews }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TaskTwoReviews",

  data() {
    return {
      review_back: 0,
      reviews: [
        {
          name: 'Андрей Ляпин',
          avatar: 'reviews__avatar2',
          reviews: 'Супер-пупер разработчик.'
        },

        {
          name: 'Алексей Гоно',
          avatar: 'reviews__avatar',
          reviews: 'Отличное и удобное приложение. ' +
              'Классные возможности, отзывчивая поддержка.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/style";

.task-two-reviews {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 357px;
  width: 100%;

  &:before {
    content: '';
    pointer-events: none;
    width: 14px;
    height: 14px;
    margin: 0 auto;
    z-index: 5;
    left: 0;
    right: 0;
    top: 89%;
    border-radius: 10px 45px 10px 0;
    position: absolute;
    border-left: 4px solid #FFFFFF;
    border-bottom: 4px solid #FFFFFF;
    transform: rotate(-45deg);
  }

  &__title {
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    @include roboto-condensed_700
  }

  &__container {
    user-select: none;
    z-index: 3;
    position: relative;
    transition: 0.3s;
    width: 100%;
    max-width: 560px;
    height: 240px;
    padding: 20px;
    border-radius: 18px;
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-rows: 62px 1fr;
    gap: 20px;
    cursor: pointer;
    @include bg-gradient_green;

    &_back {
      z-index: 1;
      position: absolute;
      opacity: 0.5;
      transform: scale(0.83);
      top: 19%;
    }
  }

  &__circle {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    border-width: 1px;
    border-style: solid;

    &_big {
      width: 102px;
      height: 102px;
      border-color: rgba(255, 255, 255, 0.25);
      grid-row: 1 / span 2;
    }

    &_middle {
      border-color: rgba(255, 255, 255, 0.5);;
      width: 94px;
      height: 94px;
    }

    &_small {
      width: 86px;
      height: 86px;
      border-color: white;
    }
  }

  &__avatar {
    width: 78px;
    border-radius: 50%;
  }

  &__name {
    color: white;
    font-size: 18px;
    line-height: 21px;
    align-self: end;
    @include roboto_400;
  }

  &__text {
    font-size: 20px;
    line-height: 23px;
    color: white;
    max-height: 90px;
    overflow: hidden;
    @include roboto_700;
  }
}

</style>