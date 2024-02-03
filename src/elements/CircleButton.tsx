import { useTabState } from "@/features/TabContainer";
import { Box, Circle, chakra, useStyleConfig } from "@chakra-ui/react";

interface Props {
	children?: React.ReactNode;
	index?: number;
	type?: "solid" | "outline" | "";
	size?: string | number;
}

const CircleButtonBase = ({ children, index, type = "solid", size, ...rest }: Props) => {
	const { activeTab } = useTabState();

	const outline = {
		minW: "10",
		bg: "brand.300",
		border: "1px solid",
		borderColor: "rgba(225,225,225,0.2)",
	};

	const style_type = type === "outline" ? { ...outline } : {};

	const variant = activeTab === index ? "active" : "";

	const styles = useStyleConfig("CircleButton", { variant });

	return (
		<Circle __css={styles} sx={style_type} {...rest}>
			<Box>{children}</Box>
		</Circle>
	);
};

export const CircleButton = chakra(CircleButtonBase);
