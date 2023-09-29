import plugin from "tailwindcss/plugin";

export const defaultButtonStyle = plugin(function ({ addComponents }) {
  addComponents({
    ".default-button-style": {
      height: "fit-content",
      "min-height": "29px",
      "border-radius": "0.375rem",
      "background-color": " rgb(255 255 255)",
      "padding-left": "1rem",
      "padding-right": "1rem",
      "padding-top": "0.25rem",
      "padding-bottom": "0.25rem",
      "line-height": "1",
      color: "rgb(0 0 0)",
    },
  });
});
