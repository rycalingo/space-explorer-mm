import { Flex } from "@chakra-ui/react";

interface Props {
	children: React.ReactNode;
}

export const TabRow = ({ children, ...rest }: Props) => {
	return (
		<Flex {...rest} w="100%" justifyContent={["center", null, "flex-start"]} gap="12" ml={["auto", null, "0"]} mb={["40px"]}>
			{children}
		</Flex>
	);
};
