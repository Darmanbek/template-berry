import loadable from "@loadable/component";
import { createElement } from "react";
import { Loader } from "src/components/shared/Loader/Loader";

export * from "./login/Login";
export * from "./not-found/NotFound";

export const Home = loadable(() => import("./home/Home"), {
	fallback: createElement(Loader)
});
