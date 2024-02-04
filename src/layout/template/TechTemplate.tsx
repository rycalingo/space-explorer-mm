import { Box, Heading, Text } from "@chakra-ui/react";

interface CrewTemplateProps {
	name: string;
	description: string;
}

export const TechTemplate = ({ name, description }: CrewTemplateProps) => {
	return (
		<>
			<Box mx="0" px="0">
				<Heading as="h5" variant="h5" fontSize={["0.875rem", "1rem", "1rem", "0.875em"]} mb={["0.65em", "0.65em"]} opacity={[0.4]}>
					The Terminology...
				</Heading>
				<Heading as="h2" variant="h2" fontSize={["24px", "40px"]} mb={["0.65em", "0.65em"]}>
					{name}
				</Heading>
				<Text mb={["60px", 0]} textAlign={["center", "center", "center", "left"]}>
					{description}
				</Text>
			</Box>
		</>
	);
};
