import Stage from "@/layout/Stage";
import { Box, Heading, Image, Stack, chakra } from "@chakra-ui/react";

import useSiteContent from "@/features/hooks/useSiteContent";

import { TabContainer, TabSections, TabItem } from "@/features/TabContainer";
import { TabRow } from "@/features/TabRow";
import { TabButton } from "@/elements";

import { DestTemplate } from "@/layout/template/DestTemplate";

import bg_desk from "@/assets/destination/background-destination-desktop.jpg";
import bg_tablet from "@/assets/destination/background-destination-tablet.jpg";
import bg_mobile from "@/assets/destination/background-destination-mobile.jpg";

const ChakraStage = chakra(Stage);
const ChakraTabContainer = chakra(TabContainer);
const ChakraTabButton = chakra(TabButton);

export default function Destination() {
	const { data } = useSiteContent();

	const dest_content = data?.destinations;

	const tab_lables: React.ReactNode[] = [];
	const image_sections: React.ReactNode[] = [];

	const tab_sections = dest_content?.map((item, i) => {
		const { name, images, description, distance, travel } = item;

		const label = (
			<ChakraTabButton key={name + i} index={i}>
				{name}
			</ChakraTabButton>
		);
		tab_lables.push(label);

		const src = images?.png.replace(/^\./, "./src");

		const img = (
			<TabItem key={name + i} index={i}>
				<Box w={["80%", "80%", "80%", "80%"]} m={"auto"}>
					<Image src={src} alt="object in space" w={["445px"]} />
				</Box>
			</TabItem>
		);

		image_sections.push(img);
		return (
			<TabItem key={name + i} index={i}>
				<DestTemplate name={name} description={description} dist={distance} travel={travel} />
			</TabItem>
		);
	});

	return (
		<ChakraStage bkg_image={[bg_mobile, bg_tablet, bg_desk]} pb="40px" pl={["auto", "auto", "40px", "104px"]} pr={["auto", "auto", "40px", "auto"]}>
			<Heading as="h5" variant="h5" textAlign={["center", "center", "left", "left"]}>
				<Box as="span" textStyle="link_num" opacity="0.25">
					01
				</Box>{" "}
				Pick Your Destination
			</Heading>
			<ChakraTabContainer w={["95%"]} maxW={["1600px"]} mt={["60px"]} mx={["1%", "16px"]}>
				<Stack direction={["column", "column", "column", "row"]} gap={["40px", "100px", "100px", "40px"]}>
					<Box width={["90%", "90%", "90%", "40%"]} mt="20px" ml={["auto"]} mr={["auto"]} className="images">
						{image_sections}
					</Box>
					<Box maxW={["90%", "90%", "90%", "500px"]} w={["auto", "auto", "auto", "40%"]} mx={["auto"]}>
						<TabRow>{tab_lables}</TabRow>

						<TabSections>{tab_sections}</TabSections>
					</Box>
				</Stack>
			</ChakraTabContainer>
		</ChakraStage>
	);
}
