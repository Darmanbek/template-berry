import { Outlet, createFileRoute } from "@tanstack/react-router"
import { Header, InnerLayout, MainContent, MainLayout, Sidebar } from "src/shared/layout"
import { Container } from "src/widgets/container"

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
						<Container>
							<Outlet />
						</Container>
					</MainContent>
				</InnerLayout>
			</MainLayout>
		</>
	)
}
