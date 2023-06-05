import App from "./App";
import { createRoot } from "react-dom/client";

const mount = (el, identifierPrefix = 'react-app-two') => {
  const root = createRoot(el, { identifierPrefix })
  root.render(<App />);
}

export { mount }

