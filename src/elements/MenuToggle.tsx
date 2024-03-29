import { Box } from "@chakra-ui/react";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

interface Props {
	toggle: () => void;
	isOpen: boolean;
}

export const MenuToggle = ({ toggle, isOpen }: Props) => {
	return (
		<Box display={{ base: "block", md: "none" }} mr={["44px"]} onClick={toggle} pos="relative" zIndex="1000">
			{isOpen ? <CloseIcon fontSize={30} /> : <HamburgerIcon fontSize={30} />}
		</Box>
	);
};
