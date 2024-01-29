import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";

import AllRoutes from "@/routes/AllRoutes";

import { ContentProvier } from "@/features/utility/ContentProvider";

import data from "@/assets/data.json";

function App() {
	return (
		<>
			<ChakraProvider theme={theme}>
				<ContentProvier data={data}>
					<AllRoutes />
				</ContentProvier>
			</ChakraProvider>
		</>
	);
}

export default App;
