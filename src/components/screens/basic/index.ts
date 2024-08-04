import loadable from "@loadable/component";
import { createElement } from "react";
import { Loader } from "src/components/shared";

export * from "./auth";
export * from "./not-found/NotFound";

export const Home = loadable(() => import("./home/Home"), {
	fallback: createElement(Loader)
});
