import { useTabState } from "@/features/TabContainer";
import { Box, chakra, useStyleConfig } from "@chakra-ui/react";

interface Props {
	children?: React.ReactNode;
	index: number;
}

export const TabLabel = chakra(({ children, index = 0, ...rest }: Props) => {
	const { activeTab, toggleActiveTab } = useTabState();

	const variant = activeTab === index ? "active" : "";

	const styles = useStyleConfig("TabLabel", { variant });

	return (
		<Box __css={styles} {...rest} onClick={() => toggleActiveTab(index)}>
			{children}
		</Box>
	);
});
