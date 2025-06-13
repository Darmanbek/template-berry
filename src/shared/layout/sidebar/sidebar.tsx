import { useNavigate } from "@tanstack/react-router"
import type { MenuProps } from "antd"
import { Menu } from "antd"
import { type FC, useMemo } from "react"
import { menuData } from "src/shared/data"
import { useMenuStore } from "src/shared/store"
import { SidebarContainer } from "./sidebar-container.tsx"

const Sidebar: FC = () => {
	const navigate = useNavigate()
	const { collapsed } = useMenuStore()

	const routes = useMemo(() => {
		if (!collapsed) return menuData

		const flatRoutes: MenuProps["items"] = []

		menuData?.forEach((item) => {
			if (!item) return
			if (item.type === "divider") return
			if (item.type === "group") {
				const { children } = item
				if (children) {
					children.forEach((child) => {
						flatRoutes.push(child)
					})
				}
			}
		})

		return flatRoutes
	}, [collapsed])

	return (
		<>
			<SidebarContainer>
				<nav
					style={{
						height: "calc(100vh - 80px)",
						overflowX: "hidden",
						overflowY: "auto",
					}}
				>
					<Menu
						mode={"inline"}
						items={routes}
						onClick={(item) =>
							navigate({
								to: item.key,
							})
						}
					/>
				</nav>
			</SidebarContainer>
		</>
	)
}

export { Sidebar }
