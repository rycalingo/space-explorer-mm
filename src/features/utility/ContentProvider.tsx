import { createContext, useState } from "react";

import { Page } from "@/models/pages";

interface Props {
	children: React.ReactNode;
	data: {};
}

export const SiteContent = createContext({});

export const ContentProvier = ({ children, data }: Props) => {
	const [siteState, setSiteState] = useState(data || {});

	const updateData = (currentData: Page) => {
		setSiteState(currentData);
	};

	return <SiteContent.Provider value={{ data: siteState, updateData }}>{children}</SiteContent.Provider>;
};

export const SiteContentConsumer = SiteContent.Consumer;
