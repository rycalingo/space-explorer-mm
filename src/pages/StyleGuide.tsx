import { Container, Box, Flex, HStack, VStack, Heading, Link, Text, defineStyle } from "@chakra-ui/react";

import Header from "@/layout/Header";
import { Navbar } from "@/features";
import { NavLink } from "@/elements";

const pages = [
	{
		label: "active",
		url: "",
		order: "00",
		variant: "active",
	},
	{
		label: "hovered",
		url: "",
		order: "01",
		variant: "hover",
	},
	{
		label: "idel",
		url: "",
		order: "02",
		variant: "",
	},
];

export default function StyleGuide() {
	const styles = defineStyle({
		color_group: {
			w: "full",
			h: "100px",
		},
		color_shape: {
			w: "100%",
			h: "100%",
		},
		title: {
			fontSize: "18px",
		},
	});

	const navLink_list = pages.map((page, i) => {
		return (
			<NavLink key={i} url={page?.url} num={page?.order} variant={page?.variant}>
				{page?.label}
			</NavLink>
		);
	});

	return (
		<Container maxW="1240px" w="full" mx="auto" my={10}>
			<Flex direction="column" gap="20" justify="space-between" alignItems="stretch">
				<Header />
				{/* <<--- header section --->>  */}

				<HStack __css={styles.color_group} gap="10" justify="space-between" alignContent="stretch" alignItems="stretch">
					<Box __css={styles.color_shape} bg="brand.300" border="solid 0.5px" borderColor="brand.100"></Box>
					<Box __css={styles.color_shape} bg="brand.200"></Box>
					<Box __css={styles.color_shape} bg="brand.100"></Box>
				</HStack>
				{/* <<--- color section --->>  */}
				<HStack justifyContent="space-between" alignItems="startstart">
					<VStack justifyContent="start" alignItems="start" gap="4">
						<Box>
							<Text sx={styles.title}>Heading 1</Text>
							<Heading as="h1" variant="h1">
								Earth
							</Heading>
						</Box>
						<Box>
							<Text sx={styles.title}>Heading 1</Text>
							<Heading as="h2" variant="h2">
								Venus
							</Heading>
						</Box>
						<Box>
							<Text sx={styles.title}>Heading 1</Text>
							<Heading as="h3" variant="h3">
								JUPITER & SATURN
							</Heading>
						</Box>
						<Box>
							<Text sx={styles.title}>Heading 1</Text>
							<Heading as="h4" variant="h4">
								URNAUS, NEPTUNE, & PLUTO
							</Heading>
						</Box>
						<Box>
							<Text sx={styles.title}>Heading 1</Text>
							<Heading as="h5" variant="h5">
								SO, YOU WANT TO TRAVEL TO SPACE
							</Heading>
						</Box>
					</VStack>
					{/* <<--- COLUMN --->> */}
					<VStack w="50%" alignItems="start" gap="8">
						<Box>
							<Text sx={styles.title}>Subheading 1</Text>
							<Heading as="h6" variant="subheader1">
								384,400 km
							</Heading>
						</Box>
						<Box>
							<Text sx={styles.title}>Subheading 2</Text>
							<Heading as="h6" variant="subheader2">
								AVG. DISTANCE
							</Heading>
						</Box>
						<Box>
							<Box>
								<Text sx={styles.title}>Nav text</Text>
								<Link>EUROPA</Link>
							</Box>
						</Box>
						<Box>
							<Text sx={styles.title}>Body text</Text>
							<Text>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut
								justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
								nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
							</Text>
						</Box>
					</VStack>
				</HStack>
				{/* <<--- text section --->>  */}
				<HStack>
					<Navbar>{navLink_list}</Navbar>
				</HStack>
				{/* <<--- ui section --->>  */}
			</Flex>
		</Container>
	);
}
