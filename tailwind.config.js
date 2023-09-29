import { defaultInputStyle } from "./src/plugins/default-input-style";
import { defaultButtonStyle } from "./src/plugins/default-button-style";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
    },
  },
  plugins: [defaultInputStyle, defaultButtonStyle],
};
