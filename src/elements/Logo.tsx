import { Box, Image } from "@chakra-ui/react";
import logo from "../assets/shared/logo.svg";

export const Logo = ({ ...rest }) => {
	return (
		<Box {...rest}>
			<Image src={logo} alt="Home Logo" />
		</Box>
	);
};
