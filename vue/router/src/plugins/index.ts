import { App } from "vue";
import { setupTailWindCss } from "./tailwindcss";
import { defineAsyncComponent } from "vue";
import _ from "lodash";
// import setupElementPlus from "./elementui";
import setupPinia from "./pinia";
import setupIconPark from "./iconpark";
export function setupPlugins(app: App) {
  // autoRegisterComponent(app);
  setupTailWindCss();
  // setupElementPlus(app);
  setupPinia(app);
  setupIconPark(app)
}
