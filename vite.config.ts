import { reactRouter } from "@react-router/dev/vite";
import type { SentryReactRouterBuildOptions } from "@sentry/react-router";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import {sentryReactRouter} from "@sentry/react-router";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "datsan-special-transformer",
  project: "travel-agency",
  // An auth token is required for uploading source maps.
  authToken:
    "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",
  // ...
};

export default defineConfig(config => {
  return {
    plugins: [tailwindcss(), tsconfigPaths(), reactRouter(), sentryReactRouter(sentryConfig, config)],
    sentryConfig,
    ssr: {
      noExternal: [/@syncfusion/]
    }
  };
});
