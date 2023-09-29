import plugin from "tailwindcss/plugin";

export const defaultInputStyle = plugin(function ({ addComponents }) {
  addComponents({
    ".default-input-style": {
      "border-radius": "0.375rem",
      "line-height": "1",
      "padding-left": ".5rem",
      "padding-right": ".5rem",
      "padding-top": ".25rem",
      "padding-bottom": ".25rem",
    },
  });
});
