// https://github.com/EvHaus/test-runner-benchmarks/actions/workflows/benchmark.yaml
// https://vite-plugin-ssr.com

import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react-swc";
import eslint from "vite-plugin-eslint";
import stylelint from "vite-plugin-stylelint";

export default defineConfig({
  plugins: [
    basicSsl(),
    react(),
    {
      ...eslint({
        fix: true,
      }),
    },
    {
      ...stylelint({
        fix: true,
      }),
    },
  ],
  server: {
    https: true,
    // "cert": "rm -rf .cert && mkdir -p .cert && cd .cert && openssl req -x509 -sha256 -days 356 -nodes -newkey rsa:2048 -subj \"/CN=localhost/C=it/L=milan\" -keyout key.key -out crt.crt"
    //   https: {
    //     key: fs.readFileSync("./.cert/key.key"),
    //     cert: fs.readFileSync("./.cert/crt.crt"),
    //   },
  },
  build: {
    manifest: true,
  },
});
