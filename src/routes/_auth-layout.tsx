import { Outlet, createFileRoute } from "@tanstack/react-router"
import { Flex, Layout } from "antd"

export const Route = createFileRoute("/_auth-layout")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<Layout
			style={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Flex
				flex={1}
				justify={"center"}
				align={"center"}
			>
				<Outlet />
			</Flex>
		</Layout>
	)
}
