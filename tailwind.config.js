module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        body: ["Nunito"], // will generate class name: font-body
      },
      inset: {
        px: "1px",
        0: "0",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
        36: "9rem",
        38: "9.5rem",
        40: "10rem",
        48: "12rem",
        56: "14rem",
        64: "16rem",
      },
    },
    namedGroups: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  },
  variants: {
    visibility: ["responsive", "hover", "focus", "active", "group-hover"],
    opacity: ["responsive", "hover", "focus", "active", "group-hover"],
    margin: ["responsive", "hover", "focus", "active", "group-hover", "last"],
    translate: ["responsive", "hover", "focus", "active", "group-hover"],
    inset: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [
    require("tailwindcss"),
    require("precss"),
    require("autoprefixer"),
    require("tailwindcss-named-groups"),
  ],
};
