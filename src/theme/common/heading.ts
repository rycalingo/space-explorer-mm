export const headingStyles = {
  baseStyle: () => ({
    fontFamily: "heading",
    fontWeight: "400",
    lineHeight: "1.1em",
    textTransform: "uppercase",
  }),
  sizes: {

  },
  variants: {
    h1: {
      fontSize: "calc(150/16 * 1rem)",
    },
    h2: {
      fontSize: "calc(100/16 * 1rem)",
    },
    h3: {
      fontSize: "calc(56/16 * 1rem)",
    },
    h4: {
      fontSize: "calc(32/16 * 1rem)",
    },
    h5: {
      fontFamily: "condensed",
      fontSize: "calc(28/16 * 1rem)",
      letterSpacing: "calc(4.75/16 * 1rem)",
      color: "brand.200",
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
    variant: "base",
  }
}