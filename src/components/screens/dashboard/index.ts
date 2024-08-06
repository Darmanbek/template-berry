import loadable from "@loadable/component";
import { createElement } from "react";
import { Loader } from "src/components/shared";


export const Default = loadable(() => import("./default/Default"), {
	fallback: createElement(Loader)
});

export const Analytics = loadable(() => import("./analytics/Analytics"), {
	fallback: createElement(Loader)
});
