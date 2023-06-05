<script setup>
import { onMounted } from "vue";
const app = await import("reactRemoteTwo/bootstrap");


const id = 'random-id-two';
onMounted(() => {
  const element = document.getElementById(id);
  app.default.mount(element);
})
</script>

<template>
  <div :id="id" class="remote"></div>
</template>

<style scoped>
.remote {
  border: 1px solid blue;
  border-radius: 12px;
}
</style>

