const { Sizes } = require("./src/ds/Sizes");

module.exports = {
  content: ["./ds/**/*.css", "./ds/**/*.js", "./src/**/*.js"],
  safelist: [
    {
      pattern: /(bg|text|border|stroke)-(main|brand|social)/,
      variants: ["hover", "focus", "disabled"],
    },
    {
      pattern: new RegExp(`(${[...Object.keys(Sizes)].join("|")})`),
      vaiants: ["hover", "focus", "disabled"],
    },
  ],
  theme: {
    extend: {
      /* Fonts */
      fontFamily: {
        "01": ["Nunito", "sans-serif"],
        "02": ["Nunito Sans", "sans-serif"],
      },
      /* Colors */
      colors: {
        main: {
          100: "#1A1A1A",
          90: "#373D43",
          80: "#777A7C",
          50: "#C7D3D9",
          30: "#E1E9EF",
          20: "#F7F9FC",
        },
        brand: {
          accent: {
            yellow: "#FFD93D",
            green: "#4ADB95",
            blue: "#4793EF",
          },
        },
        social: {
          whatsapp: "#128C7E",
          linkedin: "#2E67C2",
          facebook: "#3B5998",
          twitter: "#1DA1F2",
          messenger: "#0084FF",
        },
      },
      /* Borders */
      borderRadius: {
        none: "0px",
        small: "8px",
        medium: "16px",
        large: "25px",
        circular: "50%",
        pill: "1000px",
      },
      borderWidth: {
        none: "0px",
        hairline: "1px",
        thin: "2px",
      },
      /* Opacity */
      opacity: {
        semiopaque: 0.8,
        intense: 0.6,
        medium: 0.4,
        light: 0.2,
        semitransparent: 0.1,
      },
      /* Shadows */
      boxShadow: {
        "level-1": "0px 4px 16px rgba(26, 26, 26, 0.1)",
        "level-2": "0px 8px 24px 0px rgba(26, 26, 26, 0.1)",
        "level-3": "0px 16px 32px rgba(26, 26, 26, 0.1)",
        "level-4": "0px 16px 48px rgba(26, 26, 26, 0.1)",
      },
      /* Spacing */
      spacing: {
        ...Sizes,
      },
    },
  },
  variants: {},
  plugins: [],
};
