import Header from "@/layout/Header";
import { Box, Flex, HStack, defineStyle } from "@chakra-ui/react";

export function StyleGuide() {
	const styles = defineStyle({
		color_group: {
			w: "full",
			h: "100px",
		},
		color_shape: {
			w: "100%",
			h: "100%",
		},
	});
	return (
		<Flex direction="column" gap="20" justify="space-between" alignItems="stretch">
			<Header />
			{/* <<--- header section --->>  */}
			<HStack>
				<HStack __css={styles.color_group} gap="10" justify="space-between" alignContent="stretch" alignItems="stretch">
					<Box __css={styles.color_shape} bg="brand.300" border="solid 0.5px" borderColor="brand.100"></Box>
					<Box __css={styles.color_shape} bg="brand.200"></Box>
					<Box __css={styles.color_shape} bg="brand.100"></Box>
				</HStack>
			</HStack>
			{/* <<--- color section --->>  */}
			<HStack></HStack>
			{/* <<--- text section --->>  */}
			<HStack></HStack>
			{/* <<--- ui section --->>  */}
		</Flex>
	);
}
