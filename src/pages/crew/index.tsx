import Stage from "@/layout/Stage";
import { CrewTemplate } from "@/layout/template/CrewTemplate";
import { Box, Flex, HStack, Heading, Image, Stack, chakra } from "@chakra-ui/react";

import { TabContainer, TabItem } from "@/features/TabContainer";

import useSiteContent from "@/features/hooks/useSiteContent";

const ChakraStage = chakra(Stage);
const ChakraTabContainer = chakra(TabContainer);

import bg_mobile from "@/assets/crew/background-crew-mobile.jpg";
import bg_tablet from "@/assets/crew/background-crew-tablet.jpg";
import bg_desk from "@/assets/crew/background-crew-desktop.jpg";
import { Crew } from "@/models/pages";
import { TabLabel } from "@/elements/TabLabel";
import { CircleButton } from "@/elements/CircleButton";

export default function Crew() {
	const { data } = useSiteContent();

	const crew_content = data?.crew;

	const tab_lables: React.ReactNode[] = [];
	const tab_image_sections: React.ReactNode[] = [];

	const tab_sections = crew_content?.map((item, i) => {
		const { name, images, role, bio } = item;
		const label = (
			<TabLabel key={name + i} index={i}>
				<CircleButton index={i} type="solid"></CircleButton>
			</TabLabel>
		);
		tab_lables.push(label);

		const src = images?.png.replace(/^\./, "./src");

		tab_image_sections.push(
			<TabItem key={name + i} index={i}>
				<Box h={["260px", "100%"]} overflow="visible">
					<Image src={src} alt={name} h="100%" mx="auto" mt="2px" objectFit={"contain"} />
				</Box>
			</TabItem>
		);

		return (
			<TabItem key={name + i} index={i}>
				<CrewTemplate name={name} role={role} bio={bio} />
			</TabItem>
		);
	});

	return (
		<ChakraStage bkg_image={[bg_mobile, bg_tablet, bg_desk]} pl={["auto", "auto", "40px", "104px"]} pr={["auto", "auto", "40px", "auto"]}>
			<Heading as="h5" variant="h5" fontSize={["1rem", "1.25rem", "1.75rem"]} ml={["0"]} textAlign={["center", "left", "left", "left"]}>
				<Box as="span" textStyle="link_num" opacity="0.25">
					02
				</Box>{" "}
				Meet your crew
			</Heading>
			<ChakraTabContainer w={["100%"]} maxW={["1600px"]} mt={["60px"]} px={["42px", "42px", "42px", "0"]}>
				<Flex direction={["column", "column-reverse", "column-reverse", "row-reverse"]} justifyContent={["center"]} alignItems={"center"} gap={["0px", "0px", "0px", "90px"]}>
					<Stack w={["90vw"]} justify={"end"} px="16px" borderStyle={["solid"]} borderBottom={["1px", "0"]} borderColor={["rgba(151,151,151, 0.4)"]}>
						<Box>{tab_image_sections}</Box>
					</Stack>
					<Flex w={["auto", "auto", "auto", "60%"]} direction={["column", "column-reverse", "column-reverse", "column-reverse"]} justifyContent={["space-between"]} gap={["0", "0", "0", "80px"]}>
						<HStack mx={["auto", "auto", "auto", "0"]} mt={["30px"]} mb={["40px"]} gap="16px" justify={["center", "center", "center", "left"]}>
							{tab_lables}
						</HStack>
						<Box>{tab_sections}</Box>
					</Flex>
				</Flex>
			</ChakraTabContainer>
		</ChakraStage>
	);
}
