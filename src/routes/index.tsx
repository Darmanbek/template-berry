import { RouteProps } from "react-router-dom";
import {
	Home,
	NotFound
} from "src/components/screens";

export const routes: RouteProps[] = [
	{
		path: "/",
		element: <Home />
	},

	{
		path: "/*",
		element: <NotFound />
	}
];
