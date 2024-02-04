export const headingStyles = {
  baseStyle: () => ({
    fontFamily: "heading",
    fontWeight: "400",
    lineHeight: "1.1em",
    textTransform: "uppercase",
    textAlign: ["center","center","center", "left"]
  }),
  sizes: {

  },
  variants: {
    h1: {
      fontSize: ["5rem", "null", "calc(150/16 * 1rem)"],
      mb: ["0.5rem", "0.5rem", "1rem"],
    },
    h2: {
      fontSize: ["2.375rem","2.375rem","5rem","6.25rem"],

    },
    h3: {
      fontSize: "calc(56/16 * 1rem)",
    },
    h4: {
      fontSize: ["1rem","1.5rem","1.5rem","2rem"],
    },
    h5: {
      fontFamily: "condensed",
      fontSize: ["1rem", null, "calc(28/16 * 1rem)"],
      letterSpacing: ["calc(2.7/16 * 1rem)", "calc(2.7/16 * 1rem)", "calc(4.75/16 * 1rem)"],
      color: "brand.200",
      mb: ["1rem", "1rem", "1rem"],
    },
    h6: {
      fontSize: "calc(28/16 * 1rem)",
    },
    subheader2: {
      fontFamily: "condensed",
      fontSize: "calc(14/16 * 1rem)",
      letterSpacing: "calc(2.35/16 * 1rem)",
    },
  },
  defaultProps: {
    // variant: "base",
  }
}