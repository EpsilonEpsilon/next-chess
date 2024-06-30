import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  watch:true,
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  jsxFramework:"react",
  exclude: [],
  syntax:"object-literal",
  outdir: "styled-system",

  theme: {
    extend: {
      tokens:{
        colors:{
          grayish:{value:"#21201E"}
        }
      }
    },
  },
});
