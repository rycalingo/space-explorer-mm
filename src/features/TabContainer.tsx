import { Box } from "@chakra-ui/react";

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
		<Box p="1px" pos="relative" w={["100%"]} {...rest}>
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

	const isActive = activeTab !== index ? "0" : "auto";

	return (
		<Box h={isActive} overflow="hidden" {...rest}>
			{children}
		</Box>
	);
};
