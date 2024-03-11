import React from "react";
import ReactDOM from "react-dom/client";
import "/public/assets/style/tailwind.css";

import Page from "./pages/LandingPage/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
);
