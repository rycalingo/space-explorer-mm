import { Container } from "@chakra-ui/react";
import Header from "./Header";

interface Props {
	children: React.ReactNode;
}

export default function Stage({ children }: Props) {
	return (
		<Container maxW="1240px" w="full" mx="auto" my={10}>
			<Header />
			{children}
		</Container>
	);
}
