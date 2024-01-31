// import { SiteContext } from "@/app/App";
import Stage from "@/layout/Stage";
import { Box, Heading, chakra } from "@chakra-ui/react";

import useSiteContent from "@/features/hooks/useSiteContent";

import { TabContainer, TabSections, TabItem, TabTemplate } from "@/features/TabContainer";

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

const ChakraStage = chakra(Stage);
const ChakraTabContainer = chakra(TabContainer);
const ChakraTabButton = chakra(TabButton);

export default function Destination() {
	const { data } = useSiteContent();

	const dest_content = data?.destinations;

	const tab_lables: React.ReactNode[] = [];

	const tab_sections = dest_content?.map((item: Dest, i: number) => {
		const { name, images, description, distance, travel } = item;

		const label = (
			<ChakraTabButton key={name + i} index={i}>
				{name}
			</ChakraTabButton>
		);
		tab_lables.push(label);

		const src = images?.png.replace(/^\./, "./src");

		return (
			<TabItem key={name + i} index={i}>
				<TabTemplate name={name} img={src} description={description} dist={distance} travel={travel} />
			</TabItem>
		);
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
					<TabSections>{tab_sections}</TabSections>
				</ChakraTabContainer>
			</Box>
		</ChakraStage>
	);
}
