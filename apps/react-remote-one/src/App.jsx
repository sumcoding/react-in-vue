import React from "react";
import { lang } from "store/xoid";
import "./App.css"

const App = () => {
  const [useLangXoid, setUseLangXoid] = React.useState(lang.value);
  React.useEffect(() => {
    //Your code here
    lang?.watch(
    (state) => setUseLangXoid(state)
  )
  }, [useLangXoid])
  
  return (
    <div className='remote'>
      <h2>🥳 React Remote One</h2>
      xoid: {useLangXoid}
    </div>
  )
};


export default App;