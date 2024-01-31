import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { Logo } from "@/elements";

interface Props {
	children?: React.ReactNode;
}

const Header = ({ children, ...rest }: Props) => {
	return (
		<Box as="header" w="100vw" top={[0, 0, 0, "32px"]} pos="fixed" zIndex="1" {...rest}>
			<Container maxW={["xl1"]}>
				<Flex w="100%" h="100px" justifyContent="space-between" alignItems={"center"}>
					<Logo m="32px" />
					{children ? (
						<>{children}</>
					) : (
						<Heading as="h5" variant="h5">
							DESIGN SYSTEM
						</Heading>
					)}
				</Flex>
			</Container>
		</Box>
	);
};

export default Header;
