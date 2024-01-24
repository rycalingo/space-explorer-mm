import Stage from "@/layout/Stage";
import { Box, Heading, Stack } from "@chakra-ui/react";
import backgroundImg from "@/assets/shared/bitmap.png";

const PageNotFound = () => {
	return (
		<Box
			__css={{
				h: "100vh",
				bgImage: `url(${backgroundImg})`,
				bgPos: "center bottom",
				bgRepeat: "no-repeat",
			}}
		>
			<Stage>
				<Stack h="50vh" justify="center" alignItems="center">
					<Heading>Page not found</Heading>
				</Stack>
			</Stage>
		</Box>
	);
};
export default PageNotFound;
