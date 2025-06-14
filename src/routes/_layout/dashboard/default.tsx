import { createFileRoute } from "@tanstack/react-router"
import { DefaultPage } from "src/pages/dashboard/default"

export const Route = createFileRoute("/_layout/dashboard/default")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<DefaultPage />
		</>
	)
}
