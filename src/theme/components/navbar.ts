import { defineStyleConfig } from "@chakra-ui/react";

export const Navbar = defineStyleConfig({
  baseStyle: {
    h: ["100vh","100vh","100px"],
    w: "65%",
    bgColor: "brand.10",
    backdropFilter: "blur(40.774227142333984px)",
    pt: [20, 20, 0],
    pl: [10, 10, 0],
    display: "flex",
    flexDirection: ["column", "column","row"],
    justifyContent: ["flex-start", "flex-start","center"],
    alignItems: ["flex-start", "flex-start","stretch"],
    gap: 8,
    // alignContent: "stretch",
    // alignItems: "stretch",
    pos: "absolute",
    top: [0, 0, 0],
    right: "0",
    zIndex: "100"
  },
  variants: {
    closed: {
      pos: "fixed",
      right: "-80%",
    }
  }
})