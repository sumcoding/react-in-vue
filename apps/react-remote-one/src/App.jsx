import { useState, useEffect } from "react";
import { lang } from "store/xoid";
import styles from "./App.module.css"

const App = ({ title = 'Bootstrapped' }) => {
  const [useLangXoid, setUseLangXoid] = useState(lang.value);
 useEffect(() => {
    //Your code here
    lang?.watch(
    (state) => setUseLangXoid(state)
  )
  }, [useLangXoid])

  const updateLang = (val) => {
    lang?.update(() => val);
  }
  
  return (
    <div className={styles['remote-one']}>
      <h2>🥳 React Remote one {title}</h2>
      <input value={useLangXoid} onChange={e => updateLang(e.target.value)}/>
      xoid: {useLangXoid}
    </div>
  )
};


export default App;