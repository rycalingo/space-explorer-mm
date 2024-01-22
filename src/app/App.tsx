import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";

function App() {
	return (
		<>
			<ChakraProvider theme={theme}>
				<Box>Space-Tourism</Box>
			</ChakraProvider>
		</>
	);
}

export default App;
