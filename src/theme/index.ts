import { extendTheme } from "@chakra-ui/react";
import { headingStyles  } from "./common/heading";
import { linkStyles } from "./common/link"
import { textStyles } from "./common/text"

import { Navbar } from "./components/navbar"
import { NavLink } from "./components/navlink";
import { TabButton } from "./components/tab_button";

const main = {
  colors: {
		brand: {
			10: "rgba(255,255,255, 0.04)",
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

	textStyles: {

		link_num: {
			fontFamily: "condensed",
			fontSize: "1em",
			fontWeight: "700",
		},

		ui_tab: {
			fontFamily: "condensed",
			fontSize: "1em",
			fontWeight: "400",
		},
	},

	layerStyles: {
		
		bar: {
			w: "100%",
			borderWidth: "1px",
			borderColor: "#383B4B",
		},
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
		Navbar,
		NavLink,
		TabButton,
	},
}

export default extendTheme(main);
