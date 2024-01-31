import { Box, Flex, Spacer, Stack } from "@chakra-ui/react";
import Header from "./Header";
import { NavLink } from "@/elements";
import { Navbar } from "@/features";

interface Props {
	children: React.ReactNode;
}

const links = [
	{
		label: "home",
		icon: "00",
		url: "",
	},
	{
		label: "destination",
		icon: "01",
		url: "destination",
	},
	{
		label: "crew",
		icon: "02",
		url: "crew",
	},
	{
		label: "technology",
		icon: "03",
		url: "technology",
	},
];

const Stage = ({ children, ...rest }: Props) => {
	const navLink_list = links.map((link, i) => {
		const url = `/${link?.label === "home" ? "" : link?.label}`;
		const state = url === location.pathname ? "active" : "base";

		return (
			<NavLink key={i} url={url} num={`${link?.icon}`} state={state}>
				{link?.label}
			</NavLink>
		);
	});

	return (
		<>
			<Header>
				<Navbar>{navLink_list}</Navbar>
				<Box as="hr" layerStyle="bar" pos="absolute" left="150px" zIndex="110" w="30%"></Box>
			</Header>
			<Box w="100%" minH="100vh" py={[0, 0, 4]} bgPos="top center" bgRepeat="no-repeat" bgSize="cover" objectFit="cover" {...rest}>
				<Box h="100px" pt="40px"></Box>
				<Box w="90%" maxW={["sm, md, lg"]} mx="auto">
					{children}
				</Box>
			</Box>
		</>
	);
};
export default Stage;
