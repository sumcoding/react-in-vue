import { createApp } from 'vue'
import App from './App.jsx'
const mount = (el, props = {}) => {
  createApp(App, props).mount(el);
}

export { mount }