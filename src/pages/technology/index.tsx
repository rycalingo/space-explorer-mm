import Stage from "@/layout/Stage";
import { TechTemplate } from "@/layout/template/TechTemplate";
import { Box, Flex, Heading, Image, chakra } from "@chakra-ui/react";

import { TabContainer, TabItem } from "@/features/TabContainer";

import useSiteContent from "@/features/hooks/useSiteContent";

const ChakraStage = chakra(Stage);
const ChakraTabContainer = chakra(TabContainer);

import { TabLabel } from "@/elements/TabLabel";

import bg_desk from "@/assets/technology/background-technology-desktop.jpg";
import bg_tablet from "@/assets/technology/background-technology-tablet.jpg";
import bg_mobile from "@/assets/technology/background-technology-mobile.jpg";

import { CircleButton } from "@/elements/CircleButton";

export default function Technology() {
	const { data } = useSiteContent();

	const tech_content = data?.technology;

	const tab_lables: React.ReactNode[] = [];
	const tab_image_sections: React.ReactNode[] = [];

	const tab_sections = tech_content?.map((item, i) => {
		const { name, images, description } = item;
		const label = (
			<TabLabel key={name + i} index={i}>
				<CircleButton index={i} type="outline" w={["30px", "30px", "30px", "70px"]}>
					{i + 1}
				</CircleButton>
			</TabLabel>
		);
		tab_lables.push(label);

		const landscape = images?.landscape.replace(/^\./, "./src");
		const portrait = images?.portrait.replace(/^\./, "./src");

		tab_image_sections.push(
			<TabItem key={name + i} index={i}>
				<Box w={["100vw", "100vw", "100vw", "auto"]} overflow={"hidden"}>
					<Image src={portrait} alt={name} display={["none", "none", "none", "block"]} h="100%" mx="auto" mt="2px" objectFit={"cover"} />

					<Image src={landscape} alt={name} display={["block", "block", "block", "none"]} w="100.5%" maxW="200%" mx="auto" mt="2px" />
				</Box>
			</TabItem>
		);

		return (
			<TabItem key={name + i} index={i}>
				<TechTemplate name={name} description={description} />
			</TabItem>
		);
	});

	return (
		<ChakraStage bkg_image={[bg_mobile, bg_tablet, bg_desk]} pl={["auto", "auto", "40px", "104px"]} pr={["auto", "auto", "0", "auto"]}>
			<Heading as="h5" variant="h5" fontSize={["1rem", "1.25rem", "1.75rem"]} ml={["0"]} textAlign={["center", "left", "left", "left"]}>
				<Box as="span" textStyle="link_num" opacity="0.25">
					03
				</Box>{" "}
				SPACE LAUNCH 101
			</Heading>
			<ChakraTabContainer w={["100%"]} maxW={["1600px"]} mt={["20px"]} pb={["40px"]}>
				<Flex direction={["column", "column", "column", "row-reverse"]} justifyContent={["center", "center", "center", "space-between"]} alignItems={["center", null, null, "center"]} gap={["0px", "0px", "0px", "80px"]}>
					<Box w={["auto", null, null, "200%"]}>{tab_image_sections}</Box>

					<Flex w={["auto", "auto", "auto", "auto"]} mx={["20px", null, null, 0]} direction={["column", "column", "column", "row"]} justifyContent={["space-between", null, null, "flex-end"]} gap={["0", "0", "0", "10%"]}>
						<Flex direction={["row", "row", "row", "column"]} w={["100%", "100%", "100%", "auto"]} mx={["auto", "auto", "auto", "0"]} mt={["30px", null, null, 0]} mb={["40px"]} gap="32px" justifyContent={["center", null, null, "flex-start"]}>
							{tab_lables}
						</Flex>
						<Box w={["auto", null, null, "auto"]}>{tab_sections}</Box>
					</Flex>
				</Flex>
			</ChakraTabContainer>
		</ChakraStage>
	);
}
