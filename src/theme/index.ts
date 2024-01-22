import { extendTheme } from "@chakra-ui/react";
import { headingStyles  } from "./common/heading";
import { linkStyles } from "./common/link"
import { textStyles } from "./common/text"

const main = {
  colors: {
		brand: {
			40: "rgba(255,255,255, 0.4)",
			100: "rgb(255,255,255)",
			200: "rgb(208,214,249)",
			300: "rgb(11,13,23)",
		},
  },

	fonts: {
		heading: "Bellefair, serif",
		body: "Barlow, sans-serif",
		condensed: "'Barlow Condensed', sans-serif",
	},

  styles: {
    global: () => ({
      body: {
				color: "brand.100",
				fontFamily: "body",
				fontSize: "16px",
				fontWeight: "400",
				lineHeight: "1.1em",

        bg: "brand.300",
      },

    }),
  },

  components: {
    Heading: headingStyles,
		Link: linkStyles,
		Text: textStyles,
	},
}

export default extendTheme(main);
