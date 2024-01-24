import { createBrowserRouter, RouterProvider, useRouteError } from "react-router-dom";

import PageNotFound from "./page-not-found";

const ErrorBoundary = () => {
	const error = useRouteError();
	console.error(error);
	return <PageNotFound />;
};

const pages = import.meta.glob("@/pages/**/*.tsx", { eager: true });

const routes = [];

for (const path of Object.keys(pages)) {
	const fileName = path.match(/\/src\/pages\/(.*)\.tsx$/)?.[1];
	if (!fileName) {
		continue;
	}

	const normalizedPathName = fileName.includes("$") ? fileName.replace("$", ":") : fileName.replace(/\/index/, "");

	routes.push({
		path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
		Element: pages[path]?.default,
		loader: pages[path]?.loader,
		action: pages[path]?.action,
		ErrorBoundary: <ErrorBoundary />,
	});
}

const router = createBrowserRouter(
	routes.map(({ Element, ErrorBoundary, ...rest }) => ({
		...rest,
		element: <Element />,
		...(ErrorBoundary && {
			errorElement: ErrorBoundary,
		}),
	}))
);

export default function AllRoutes() {
	return <RouterProvider router={router} />;
}
