import { Container } from "@chakra-ui/react";
import Header from "./Header";

interface Props {
	children: React.ReactNode;
}

export default function Stage({ children, ...rest }: Props) {
	return (
		<Container maxW="1240px" w="full" mx="auto" my={10} {...rest}>
			<Header />
			{children}
		</Container>
	);
}
