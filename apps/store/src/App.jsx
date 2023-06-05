import { defineComponent, ref } from 'vue'
import { lang } from "./store-xoid";

export default defineComponent({
  name: 'App',
  setup() {
    const langVal = ref(lang.value);
    const increment = ref(0)
    const onClick = () => { 
      increment.value += 1;
      lang.update(state => state + increment.value);
      langVal.value = lang.value;
    }
    return () => <div>
      <h1>PLACE TO TEST STORE</h1>
      <button onClick={() => onClick()}>{langVal.value}</button>
    </div>
  }
})
