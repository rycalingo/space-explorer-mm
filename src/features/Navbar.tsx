import { Box, useStyleConfig } from "@chakra-ui/react";
import { useSize } from "@chakra-ui/react-use-size";
import { useEffect, useRef, useState } from "react";
import { MenuToggle } from "@/elements";

interface Props {
	children: React.ReactNode;
}

export function Navbar({ children, ...rest }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	const elementRef = useRef<HTMLDivElement>(null);
	const { width } = useSize(elementRef) ?? { width: null };

	const variant = width >= 768 ? "open" : isOpen ? "base" : "closed";

	const styles = useStyleConfig("Navbar", { variant });

	useEffect(() => {
		if (width > 768) {
			setIsOpen(true);
			setIsMobile(false);
		}
		if (width <= 768) {
			if (!isMobile) {
				setIsOpen(false);
				setIsMobile(true);
			}
		}
	}, [width]);

	return (
		<>
			<Box ref={elementRef} w="100vw" pos="fixed" top="0" left="0" zIndex="-100"></Box>
			<MenuToggle toggle={toggle} isOpen={isOpen} />
			<Box as="nav" __css={styles} {...rest}>
				{children}
			</Box>
		</>
	);
}
