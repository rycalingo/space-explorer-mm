import { Box, Link, useStyleConfig } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
	children: React.ReactNode;
	url?: string;
	num?: string;
	state?: string;
}

export const NavLink = ({ children, url, num, state, ...rest }: Props) => {
	const [isHovered, setIsHovered] = useState(false);

	const variant = isHovered ? "hover" : state;

	const styles = useStyleConfig("NavLink", { variant });

	return (
		<Link href={url} sx={styles} {...rest} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<Box as="span">
				<Box as="span" textStyle="link_num" display={["inline", "inline", "none", "inline"]}>
					{num ? `${num} ` : null}
				</Box>
				{children}
			</Box>
		</Link>
	);
};
