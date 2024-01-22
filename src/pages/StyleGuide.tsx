import Header from "@/layout/Header";
import { Flex, HStack } from "@chakra-ui/react";

export function StyleGuide() {
	return (
		<Flex direction="column" gap="20" justify="space-between" alignItems="stretch">
			<Header />
			{/* <<--- header section --->>  */}
			<HStack></HStack>
			{/* <<--- color section --->>  */}
			<HStack></HStack>
			{/* <<--- text section --->>  */}
			<HStack></HStack>
			{/* <<--- ui section --->>  */}
		</Flex>
	);
}
