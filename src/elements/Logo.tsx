import { Image } from "@chakra-ui/react";
import logo from "../assets/shared/logo.svg";

export default function Logo() {
	return <Image src={logo} boxSize="48px" alt="Home Logo" />;
}
