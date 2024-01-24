import { Box, Link, useStyleConfig } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
	children: React.ReactNode;
	url?: string;
	num?: string;
	state?: string;
}

export function NavLink({ children, url, num, state, ...rest }: Props) {
	const [isHovered, setIsHovered] = useState(false);

	const variant = isHovered ? "hover" : state;

	const styles = useStyleConfig("NavLink", { variant });

	return (
		<Link href={url} sx={styles} {...rest} onMouseEnter={() => (state !== "active" ? setIsHovered(true) : null)} onMouseLeave={() => (state !== "active" ? setIsHovered(false) : null)}>
			<Box as="span">
				{num ? (
					<Box as="span" textStyle="link_num">
						{num}{" "}
					</Box>
				) : null}
				{children}
			</Box>
		</Link>
	);
}
