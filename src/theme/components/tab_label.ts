import { defineStyleConfig } from "@chakra-ui/react";

export const TabLabel = defineStyleConfig({
  baseStyle: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    aspectRatio: "1/1",
    color: "brand.300",
    bgColor: ["rgba(225,225,225,0.2)"],
    w: "10px",
  },
  variants: {
    active: {
      bgColor: ["rgba(225,225,225,1)"],
    },
  },

});