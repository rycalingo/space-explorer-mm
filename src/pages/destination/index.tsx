// import { SiteContext } from "@/app/App";
import Stage from "@/layout/Stage";
import { Box, Flex, Heading, Image, Square, Stack, chakra } from "@chakra-ui/react";

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
	const image_sections: React.ReactNode[] = [];

	const tab_sections = dest_content?.map((item: Dest, i: number) => {
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
				{/* <Flex mx="auto" justify="center"> */}
				<Image src={src} alt="" w={["530px", "530px", "1030px"]} mx="auto" />
				{/* </Flex> */}
			</TabItem>
		);

		image_sections.push(img);
		return (
			<TabItem key={name + i} index={i}>
				<TabTemplate name={name} description={description} dist={distance} travel={travel} />
			</TabItem>
		);
	});

	return (
		<ChakraStage bkg_image={[bg_mobile, bg_tablet, bg_desk]}>
			<Box mt={["10px", "0", "120px"]} mb={["40px"]} mx={["auto", "auto", "80px"]}>
				<Heading as="h5" variant="h5" textAlign={["center", "center", "left"]}>
					<Box as="span" textStyle="link_num" opacity="0.25">
						01
					</Box>{" "}
					Pick Your Destination
				</Heading>
				<ChakraTabContainer w={["100%"]} minW={["xs", "sm", "md"]} mt={["60px"]} ml={["auto", "60px"]} mr={["auto", "0"]}>
					<Stack direction={["column", "column", "row", "row"]} justifyContent={["center", "center", "space-bettween"]} alignContent={"center"} gap="60px">
						<Box pt="20px" mx={["0", "auto", "40px"]} className="images">
							<TabSections>{image_sections}</TabSections>
						</Box>
						<Box>
							<TabRow>{tab_lables}</TabRow>

							<TabSections>{tab_sections}</TabSections>
						</Box>
					</Stack>
				</ChakraTabContainer>
			</Box>
		</ChakraStage>
	);
}
