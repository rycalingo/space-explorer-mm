import { Box, Link, useStyleConfig } from "@chakra-ui/react";

interface Props {
	children: React.ReactNode;
	url?: string;
	num?: string;
	variant?: string;
}

export function NavLink({ children, url, num, variant, ...rest }: Props) {
	const styles = useStyleConfig("NavLink", { variant });

	return (
		<Link href={url} sx={styles} {...rest}>
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
