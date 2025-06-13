import { createRouter } from "@tanstack/react-router"
import { routeTree } from "src/routeTree.gen.ts"

export const router = createRouter({
	routeTree,
	defaultPreload: "intent",
	defaultPreloadStaleTime: 0,
	scrollRestoration: true,
})

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router
	}
}
