import Stage from "@/layout/Stage";
import { Heading, chakra } from "@chakra-ui/react";

import bg_desk from "@/assets/technology/background-technology-desktop.jpg";
import bg_tablet from "@/assets/technology/background-technology-tablet.jpg";
import bg_mobile from "@/assets/technology/background-technology-mobile.jpg";

const ChakraStage = chakra(Stage);

export default function Technology() {
	return (
		<ChakraStage bkg_image={[bg_mobile, bg_tablet, bg_desk]}>
			<Heading>Technology</Heading>
		</ChakraStage>
	);
}
