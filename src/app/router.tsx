import { createRouter } from "@tanstack/react-router"
import { NotFoundPage } from "src/pages/not-found"
import { routeTree } from "src/routeTree.gen.ts"

export const router = createRouter({
	routeTree,
	defaultPreload: "intent",
	defaultPreloadStaleTime: 0,
	scrollRestoration: true,
	defaultNotFoundComponent: NotFoundPage,
})

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router
	}
}
