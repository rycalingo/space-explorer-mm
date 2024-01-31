import { Box, Flex, Heading, Image, Square, Stack, Text } from "@chakra-ui/react";

import { createContext, useContext, useState } from "react";

interface Props {
	children?: React.ReactNode;
}

type TabContextType = {
	activeTab: number;
	toggleActiveTab: (i: number) => void;
};

const TabContext = createContext<TabContextType>({
	activeTab: 0,
	toggleActiveTab: () => {},
});

export const TabStateProvider = ({ children }: Props) => {
	const [activeTab, setActiveTab] = useState(0);

	const toggleActiveTab = (i: number) => {
		setActiveTab(i);
	};

	const tabContext = {
		activeTab: activeTab,
		toggleActiveTab,
	};

	return <TabContext.Provider value={tabContext}>{children}</TabContext.Provider>;
};

export const useTabState = () => {
	return useContext(TabContext);
};

export const TabContainer = ({ children, ...rest }: Props) => {
	return (
		<Box p="1px" pos="relative" w={["", "", "", "1024px"]} {...rest}>
			<TabStateProvider>{children}</TabStateProvider>
		</Box>
	);
};

export const TabSections = ({ children, ...rest }: Props) => {
	return (
		<Box overflow="hidden" {...rest}>
			{children}
		</Box>
	);
};

interface TabItemProps extends Props {
	index: number;
}

export const TabItem = ({ children, index, ...rest }: TabItemProps) => {
	const { activeTab } = useTabState();

	const isActive = activeTab !== index ? "none" : "block";

	return (
		<Box display={isActive} {...rest}>
			{children}
		</Box>
	);
};

interface TabTemplateProps {
	key?: string | number;
	name: string;
	description: string;
	dist: string;
	travel: string;
}

export const TabTemplate = ({ name, description, dist, travel }: TabTemplateProps) => {
	return (
		<Box flex="1">
			<Heading as="h2" variant="h2">
				{name}
			</Heading>
			<Text mb="60px">{description}</Text>
			<Box as="hr" layerStyle="bar" mb="44px"></Box>
			<Flex gap="32px">
				<Box>
					<Heading as="h6" variant="subheader2">
						AVG. DISTANCE
					</Heading>
					<Heading as="h6" variant="h6" mt="16px">
						{dist}
					</Heading>
				</Box>
				<Box>
					<Heading as="h6" variant="subheader2">
						Est. travel time
					</Heading>
					<Heading as="h6" variant="h6" mt="16px">
						{travel}
					</Heading>
				</Box>
			</Flex>
		</Box>
	);
};
