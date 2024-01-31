import { useTabState } from "@/features/TabContainer";
import { Button, useStyleConfig } from "@chakra-ui/react";

interface Props {
	children: React.ReactNode;
	index: number;
}

export const TabButton = ({ children, index = 0, ...rest }: Props) => {
	const { activeTab, toggleActiveTab } = useTabState();

	const variant = activeTab === index ? "active" : "base";

	const styles = useStyleConfig("TabButton", { variant });

	return (
		<Button __css={styles} {...rest} onClick={() => toggleActiveTab(index)}>
			{children}
		</Button>
	);
};
