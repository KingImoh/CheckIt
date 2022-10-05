/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff3e00",

          secondary: "#343232",

          accent: "beige",

          neutral: "#272626",

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
