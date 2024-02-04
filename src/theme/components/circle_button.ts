import { defineStyleConfig } from "@chakra-ui/react";

export const CircleButton = defineStyleConfig({
  baseStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: ["1em","1em","1em","2em"],
    lineHeight: "0",
    p:"0.3em",
    borderRadius: "50%",
    color:"brand.100",
    bgColor: "rgba(225,225,225,0.2)",
    fontFamily: "bellefair",
    aspectRatio: "1/1",
  },

  variants: {
    active: {

      bgColor: "rgba(225,225,225,1) !important" ,
      color:"brand.300",
    },
  },

});