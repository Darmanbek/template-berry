import { Drawer } from "antd"
import { useResponsive } from "antd-style"
import { type FC, type PropsWithChildren } from "react"
import { useMenuStore } from "src/shared/store"
import { LayoutSider } from "src/shared/ui"
import { Logo } from "src/widgets/logo"

const SidebarContainer: FC<PropsWithChildren> = ({ children }) => {
	const { md = true } = useResponsive()

	const { collapsed, toggleCollapsed } = useMenuStore()

	if (md)
		return (
			<LayoutSider
				theme={"light"}
				width={260 + 8}
				collapsedWidth={72 + 8}
				collapsed={collapsed}
				style={{
					position: "relative",
				}}
			>
				{children}
			</LayoutSider>
		)

	return (
		<Drawer
			placement={"left"}
			closable={false}
			open={collapsed}
			onClose={toggleCollapsed}
			title={<Logo />}
			width={260}
			styles={{
				body: {
					padding: 0,
					overflow: "hidden",
					position: "relative",
				},
				header: {
					minHeight: 80,
					borderBottom: 0,
				},
			}}
		>
			{children}
		</Drawer>
	)
}

export { SidebarContainer }
