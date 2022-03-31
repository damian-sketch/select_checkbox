import React from "react";
import { createRoot } from 'react-dom/client'

import App from "./App";

const container = document.getElementById("root")

const root = createRoot(container)
root.render(<App />)
// hot reloading. It works by replacing a module of the application 
// during runtime with an updated one so that it’s available for instant use.
module.hot.accept();