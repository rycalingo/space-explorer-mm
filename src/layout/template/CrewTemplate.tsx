import { Box, Heading, Text } from "@chakra-ui/react";

interface CrewTemplateProps {
	key?: string | number;
	name: string;
	role: string;
	bio: string;
}

export const CrewTemplate = ({ name, role, bio }: CrewTemplateProps) => {
	return (
		<>
			<Box mx="0" px="0">
				<Heading as="h4" variant="h4" fontSize={["16px", "24px"]} mb={["0.65em", "0.65em"]} opacity={[0.4]}>
					{role}
				</Heading>
				<Heading as="h2" variant="h2" fontSize={["24px", "40px"]} mb={["0.65em", "0.65em"]}>
					{name}
				</Heading>
				<Text mb={["60px", 0]} textAlign={["center", "center", "center", "left"]}>
					{bio}
				</Text>
			</Box>
		</>
	);
};
