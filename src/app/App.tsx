import { ChakraProvider, Container } from "@chakra-ui/react";

import theme from "@/theme";

import { StyleGuide } from "@/pages";

function App() {
	return (
		<>
			<ChakraProvider theme={theme}>
				<Container maxW="1240px" w="full" mx="auto" my={10}>
					<StyleGuide />
				</Container>
			</ChakraProvider>
		</>
	);
}

export default App;
