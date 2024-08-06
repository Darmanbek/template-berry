import loadable from "@loadable/component";
import { createElement } from "react";
import { Loader } from "src/components/shared";


export const Statistics = loadable(() => import("./statistics/Statistics"), {
	fallback: createElement(Loader)
});
