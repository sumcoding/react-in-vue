<script setup>
import { onMounted } from "vue";
const app = await import("reactRemoteOne/bootstrap");


const id = 'random-id-one';
onMounted(() => {
  const element = document.getElementById(id);
  app.default.mount(element, { title: 'Remote Bootstrap' });
})
</script>

<template>
  <div :id="id" class="remote"></div>
</template>

<style scoped>
.remote {
  border: 1px solid purple;
  border-radius: 12px;
}
</style>


