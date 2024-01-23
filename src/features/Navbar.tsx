import { Box, useStyleConfig } from "@chakra-ui/react";

interface Props {
	children: React.ReactNode;
}

export function Navbar({ children, ...rest }: Props) {
	const styles = useStyleConfig("Navbar", {});

	return (
		<Box as="nav" __css={styles} {...rest}>
			{children}
		</Box>
	);
}
