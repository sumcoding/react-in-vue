import { useState, useEffect } from "react";
import { lang } from "store/xoid";
import "./App.css"

const App = () => {
  const [useLangXoid, setUseLangXoid] = useState(lang.value);
 useEffect(() => {
    //Your code here
    lang?.watch(
    (state) => setUseLangXoid(state)
  )
  }, [useLangXoid])
  
  return (
    <div className='remote-two'>
      <h2>🥳 React Remote Two </h2>
      xoid: {useLangXoid}
    </div>
  )
};


export default App;