import { Config } from "tailwindcss";
import theme from "tailwindcss/defaultTheme";

const config = {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", ...theme.fontFamily.sans],
      mono: ["Fira Mono", ...theme.fontFamily.mono],
    },
    extend: {
      colors: {
        primary: "#9D6CFF",
      },
      boxShadow: {},
      height: {
        content: "calc(100vh - 20rem)",
        "half-screen": "50vh",
      },
      borderWidth: {
        1: "0.063rem",
        5: "0.313rem",
      },
      borderRadius: {
        10: "0.625rem",
      },
      fontSize: {
        12: ["0.75rem", "1.125rem"],
        13: ["0.813rem", "1.219rem"],
        14: ["0.875rem", "1.313rem"],
        16: ["1rem", "1.5rem"],
        20: ["1.25rem", "1.875rem"],
        24: ["1.5rem", "2.25rem"],
      },
      zIndex: {
        998: "998",
        99998: "99998",
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(255, 255, 255, 0.00) 30%, rgba(62, 151, 255, 0.30) 100%)",
      },
    },
    screens: {
      xxs: "20rem",
      xs: "23.75rem",
      ssm: "30rem",
      sm: "35.938rem",
      md: "48rem",
      lg: "61.938rem",
      xl: "74.938rem",
      "2xl": "81.188rem",
      "3xl": "99.938rem",
      "4xl": "106.188rem",
    },
  },
  plugins: [],
} satisfies Config;
export default config;
