<script setup>
import { ref, watch } from 'vue'
import { lang } from "store/xoid";

const props = defineProps({
  title: {
    type: String,
    default: 'Bootstraped'
  }
})

const langVal = ref(lang.value)
const title = ref(props.title)

lang.watch(
  (state) => langVal.value = state
)

watch(langVal, (val) => {
  lang.update(() => val)
})

</script>

<template>
  <div class="vue-app">
    <h2>Vue Remote Two {{ title }}</h2>
    xoid: <input v-model="langVal" />
    {{ langVal }}
  </div>
</template>

<style lang="scss" scoped>
.vue-app {
  border: 1px solid var(--color-font-base, black);
  border-radius: 12px;
  color: var(--color-font-base, black);
  padding: 12px;
  h2 {
    color: var(--color-font-inverse, black);
    background-color: var(--color-action-primary-base, rgb(91, 177, 188));
  }
}

</style>