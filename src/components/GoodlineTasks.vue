<template>
  <div class="goodline-task">
    <router-link
        class="goodline-task__link"
        :to="{name: 'TaskOne'}">
      1 задание
    </router-link>

    <router-link
        :to="{name: 'TaskOne'}"
        class="goodline-task__link">
      2 задание
    </router-link>
  </div>
</template>

<script>
export default {
  name: "GoodlineTasks"
}
</script>

<style lang="scss">
.goodline-task {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__link {
    color: red;
    text-decoration: none;
    text-transform: uppercase;
    margin: 10px;
  }

}

</style>