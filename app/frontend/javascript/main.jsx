// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";

import "../stylesheets/application.css.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import Application from "./application";

import store from "./store/webdev_lib_store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <Provider store={store}>
      <Application/>
    </Provider>
  </StrictMode>
);
