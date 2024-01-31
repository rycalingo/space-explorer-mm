import { defineStyleConfig } from "@chakra-ui/react";

export const TabButton = defineStyleConfig({
  baseStyle: {
    fontSize: "16px",
    fontFamily: "condensed",
    fontWeight: "400",
    lineHeight: "1.1em",
    letterSpacing: "2.7px",
    textAlign: "center",
    textTransform: "uppercase",
    color: "brand.100",
    borderRadius: 0,
    borderBottom: "3px solid",
    borderColor: "rgba(225,225,225,0)",
    pb:"14px",
    _hover: {
      borderColor: "rgba(225,225,225,0.5)",
    },
  },
  variants: {
    active: {
      borderColor: "rgba(225,225,225,1)",
      _hover: {
        borderColor: "rgba(225,225,225,1)",
      },
    },
  },

});