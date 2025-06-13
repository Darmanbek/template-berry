import { Outlet, createFileRoute } from "@tanstack/react-router"
import { Header, InnerLayout, MainContent, MainLayout, Sidebar } from "src/shared/layout"

export const Route = createFileRoute("/_layout")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<MainLayout>
				<Header />
				<InnerLayout>
					<Sidebar />
					<MainContent>
						<Outlet />
					</MainContent>
				</InnerLayout>
			</MainLayout>
		</>
	)
}
