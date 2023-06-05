import App from "./App";
import { createRoot } from "react-dom/client";

const mount = (el, identifierPrefix = 'react-host') => {
  const root = createRoot(el, { identifierPrefix })
  root.render(<App />);
}

export { mount }

