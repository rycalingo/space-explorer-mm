import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Logo } from "@/elements";

interface Props {
	children?: React.ReactNode;
}

const Header = ({ children }: Props) => {
	return (
		<Box as="header" w="full" py={[0, 0, 10]}>
			<Flex alignItems={["flex-start", "flex-start", "center"]}>
				<Logo mt={[4, 4, 0]} />
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
};

export default Header;
