import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import Logo from "@/elements/Logo";

interface Props {
	children?: React.ReactNode;
}

export default function Header({ children }: Props) {
	return (
		<Box as="header" w="full">
			<Flex alignItems="center">
				<Logo />
				<Spacer />
				{children ? (
					<>{children}</>
				) : (
					<Heading as="h5" variant="h5">
						DESIGN SYSTEM
					</Heading>
				)}
			</Flex>
		</Box>
	);
}
