import { Box, Image } from "@chakra-ui/react";
import logo from "../assets/shared/logo.svg";

export const Logo = ({ ...rest }) => {
	return (
		<Box {...rest}>
			<Image src={logo} width={["32px", "32px", "100%"]} alt="Home Logo" />
		</Box>
	);
};
