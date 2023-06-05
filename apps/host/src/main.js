import { createApp, defineAsyncComponent } from "vue";
import App from './App.vue';
const vueRemoteOne = defineAsyncComponent(() => import("vueRemoteOne/component"));
const vueRemoteTwo = defineAsyncComponent(() => import("vueRemoteTwo/component"));


const app = createApp(App)

app.component("vue-remote-one", vueRemoteOne)
app.component("vue-remote-two", vueRemoteTwo)

app.mount("#app");
