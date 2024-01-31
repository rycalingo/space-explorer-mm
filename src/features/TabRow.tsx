import { Flex } from "@chakra-ui/react";

interface Props {
	children: React.ReactNode;
}

export const TabRow = ({ children, ...rest }: Props) => {
	return (
		<Flex {...rest} w="50%" justifyContent={["center", null, "flex-start"]} gap="12" ml={["auto", null, "auto"]} mr={["auto", null, 0]} pl="40px">
			{children}
		</Flex>
	);
};
