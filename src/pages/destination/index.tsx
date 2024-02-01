// import { SiteContext } from "@/app/App";
import Stage from "@/layout/Stage";
import { Box, Heading, Image, Stack, chakra } from "@chakra-ui/react";

import useSiteContent from "@/features/hooks/useSiteContent";

import { TabContainer, TabSections, TabItem } from "@/features/TabContainer";
import { TabRow } from "@/features/TabRow";
import { TabButton } from "@/elements";

import { DestTemplate } from "@/layout/template/DestTemplate";

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
				{/* <Flex justifyContent="center" alignContent={["center"]} alignItems={["center"]}> */}
				{/* <Square size={["50vw", "50vw", "40vw"]} justifyContent={"center"}> */}
				<Box w={["80%", "80%", "80%", "80%"]} m={"auto"}>
					<Image src={src} alt="object in space" w={["445px"]} />
				</Box>
				{/* </Square> */}
				{/* </Flex> */}
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
		<ChakraStage bkg_image={[bg_mobile, bg_tablet, bg_desk]}>
			<Heading as="h5" variant="h5" textAlign={["center", "center", "center", "left"]}>
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
