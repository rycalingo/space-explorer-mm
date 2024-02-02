import { Box, Heading, Text, Flex } from "@chakra-ui/react";

interface TabTemplateProps {
	key?: string | number;
	name: string;
	description: string;
	dist: string;
	travel: string;
}

export const DestTemplate = ({ name, description, dist, travel }: TabTemplateProps) => {
	return (
		<Box mx="0" px="0">
			<Heading as="h2" variant="h2">
				{name}
			</Heading>
			<Text mb="60px">{description}</Text>
			<Box as="hr" layerStyle="bar" mb="44px"></Box>
			<Flex gap="32px" direction={["column", "row", "row", "row"]} justify={["center", "center", "center", "start"]} justifyContent={["space-around", "space-around", "space-around", "start"]}>
				<Box>
					<Heading as="h6" variant="subheader2">
						AVG. DISTANCE
					</Heading>
					<Heading as="h6" variant="h6" mt="16px">
						{dist}
					</Heading>
				</Box>
				<Box>
					<Heading as="h6" variant="subheader2">
						Est. travel time
					</Heading>
					<Heading as="h6" variant="h6" mt="16px">
						{travel}
					</Heading>
				</Box>
			</Flex>
		</Box>
	);
};
