// import { SiteContext } from "@/app/App";
import Stage from "@/layout/Stage";
import { Box, Heading, chakra } from "@chakra-ui/react";

import useSiteContent from "@/features/hooks/useSiteContent";

import { TabContainer } from "@/features/TabContainer";

import { TabRow } from "@/features/TabRow";
import { TabButton } from "@/elements";

import { Dest } from "@/models/pages";

const images = import.meta.glob("@/assets/destination/background-*.jpg", { eager: true });

const imageBG = [];
for (let img of Object.keys(images)) {
	imageBG.push(img);
}
imageBG.push(imageBG.splice(0, 1)[0]);

const [bg_mobile, bg_tablet, bg_desk] = imageBG;

const ChakraTabContainer = chakra(TabContainer);
const ChakraTabButton = chakra(TabButton);
const ChakraStage = chakra(Stage);

export default function Destination() {
	const { data } = useSiteContent();

	const dest_content = data?.destinations;

	const tab_lables = dest_content?.map((item: Dest, i: number) => {
		const { name } = item;

		const label = (
			<ChakraTabButton key={name + i} index={i}>
				{name}
			</ChakraTabButton>
		);

		return label;
	});

	return (
		<ChakraStage bgImage={[bg_mobile, bg_tablet, bg_desk]}>
			<Box mt={["120px"]} mx={["80px"]}>
				<Heading as="h5" variant="h5">
					<Box as="span" textStyle="link_num" opacity="0.25">
						01
					</Box>{" "}
					Pick Your Destination
				</Heading>
				<ChakraTabContainer>
					<TabRow>{tab_lables}</TabRow>
				</ChakraTabContainer>
			</Box>
		</ChakraStage>
	);
}
