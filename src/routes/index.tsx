import { RouteProps } from "react-router-dom";
import {
	Home,
	NotFound,

	// Dashboard
	Default,
	// Dashboard

	Statistics
} from "src/components/screens";

export const routes: RouteProps[] = [
	{
		path: "/",
		element: <Home />
	},

	{
		path: "/dashboard/default",
		element: <Default />
	},

	{
		path: "/widget/statistics",
		element: <Statistics />
	},

	{
		path: "/*",
		element: <NotFound />
	}
];
