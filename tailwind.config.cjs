/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff3e00",

        almostPrimary: "#923018",

        secondary: "#343232",

        accent: "beige",

        neutral: "#272626",

        grey: "#808080",

        "base-100": "#000000",

        info: "#0000FF",

        success: "#008000",

        warning: "#FFFF00",

        error: "#FF0000",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff3e00",

          almostPrimary: "#923018",

          secondary: "#343232",

          accent: "beige",

          neutral: "#272626",

          grey: "#808080",

          "base-100": "#000000",

          info: "#0000FF",

          success: "#008000",

          warning: "#FFFF00",

          error: "#FF0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
