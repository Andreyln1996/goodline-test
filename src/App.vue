<template>
  <div id="app" class="goodline-test">
    <TaskOne/>
  </div>
</template>

<script>

import TaskOne from "@/components/TaskOne";
export default {
  name: 'App',
  components: {
    TaskOne

  }
}
</script>

<style>
.goodline-test {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
