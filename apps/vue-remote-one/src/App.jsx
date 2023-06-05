import { defineComponent, ref, watchEffect } from 'vue';
import { lang } from "store/xoid";
import styles from './App.module.css';
export const App = defineComponent({
  props: {
    title: {
      type: String,
      default: 'Bootstrapped'
    },
  },
  setup(props) {
    console.log(styles)
    const useLangXoid = ref(lang.value);
    lang?.watch(
        (state) => useLangXoid.value = state
      )

    watchEffect(
      () => {
        lang.update(() => useLangXoid.value)
      }
    );

    return () => <div class={styles['remote-one']}>
      <h2>Vue JSX Remote One {props.title}</h2>
      <input v-model={useLangXoid.value}/>
        xoid: {useLangXoid.value}
    </div>
  }
});

export default App;