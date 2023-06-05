import App from "./App";
import { createRoot } from "react-dom/client";

const mount = (el, args = {}, identifierPrefix = 'react-app-one') => {
  const root = createRoot(el, { identifierPrefix })
  root.render(<App {...args}/>);
}

export { mount }

