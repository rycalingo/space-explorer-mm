import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import AllRoutes from "@/routes/AllRoutes";

function App() {
	return (
		<>
			<ChakraProvider theme={theme}>
				<AllRoutes />
			</ChakraProvider>
		</>
	);
}

export default App;
