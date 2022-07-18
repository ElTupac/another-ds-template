module.exports = {
  content: ["./ds/**/*.css", "./ds/**/*.js", "./src/**/*.js"],
  safelist: [],
  theme: {
    extend: {
      /* Fonts */
      fontFamily: {
        "01": ["Nunito", "sans-serif"],
        "02": ["Nunito Sans", "sans-serif"],
      },
      /* Colors */
      colors: {
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
        large: "25px", // Impossible to do 40% as the figma shows
        circular: "50%",
        pill: "1000px", // This is the only way to make a pill border radius
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
    },
  },
  variants: {},
  plugins: [],
};
