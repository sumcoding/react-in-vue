
<script setup>
import { onMounted, ref } from "vue";
const app = await import("vueRemoteTwo/bootstrap");


const root = ref(null)
onMounted(() => {
  app.default.mount(root.value, { title: 'Remote Bootstrap' });
})
</script>

<template>
  <div ref="root" class="remote-vue"></div>
</template>

<style scoped>
.remote-vue {
  background-color: rgb(163, 243, 245);
}
</style>


