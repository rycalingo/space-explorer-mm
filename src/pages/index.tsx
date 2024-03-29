import Stage from "@/layout/Stage";
import { Stack, Container, Heading, Text, chakra } from "@chakra-ui/react";

import bg_desk from "@/assets/home/background-home-desktop.jpg";
import bg_tablet from "@/assets/home/background-home-tablet.jpg";
import bg_mobile from "@/assets/home/background-home-mobile.jpg";
import { ExploreButton } from "@/features";

const ChakraStage = chakra(Stage);

export default function Home() {
	return (
		<ChakraStage bkg_image={[bg_mobile, bg_tablet, bg_desk]}>
			<Stack direction={["column", "column", "column", "row"]} h={["auto", null, null, "600px"]} justify="flex-end" alignItems="center">
				<Container pt={[8, 8, 0]}>
					<Heading as="h5" variant="h5">
						SO, YOU WANT TO TRAVEL TO
					</Heading>
					<Heading as="h1" variant="h1">
						SPACE
					</Heading>
					<Text>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</Text>
				</Container>
				<Container>
					<ExploreButton to="/destination" />
				</Container>
			</Stack>
		</ChakraStage>
	);
}
