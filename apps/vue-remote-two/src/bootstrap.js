import { createApp } from 'vue'
import App from './App.vue'
const mount = (el, props = {}) => {
  createApp(App, props).mount(el);
}

export { mount }