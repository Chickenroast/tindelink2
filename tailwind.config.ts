import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./content/**/*.mdx", "./public/**/*.svg"],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        primary: "#66B6D6",
        secondary: "#160D17",
        clear: "#A7A7AC",
        purple: "#2E1C30",
        black: "#070707",

        // Add more colors as needed
      },
      fontFamily: {
        // Define your custom font families
        sans: ["Roboto", "sans-serif"],
        serif: ["Merriweather", "serif"],
        // Add more font families as needed
      },
      // You can also customize font sizes, line heights, letter spacing, etc.
      typography: {
        DEFAULT: {
          css: {
            color: "#333", // Default text color
            a: {
              color: "#007bff", // Link color
              "&:hover": {
                color: "#0056b3", // Hover color for links
              },
            },
          },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} as Config;
