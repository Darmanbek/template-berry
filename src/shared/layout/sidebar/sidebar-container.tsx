import { Drawer } from "antd"
import { useResponsive } from "antd-style"
import { type FC, type PropsWithChildren } from "react"
import { useMenuStore } from "src/shared/store"
import { LayoutSider } from "src/shared/ui"
import { Logo } from "src/widgets/logo"

const SidebarContainer: FC<PropsWithChildren> = ({ children }) => {
	const { md = true } = useResponsive()
	const { collapsed, open, toggleOpen } = useMenuStore()

	if (md)
		return (
			<LayoutSider
				theme={"light"}
				width={260}
				collapsedWidth={72}
				collapsed={collapsed}
			>
				{children}
			</LayoutSider>
		)

	return (
		<Drawer
			open={open}
			onClose={toggleOpen}
			title={<Logo />}
			styles={{
				body: {
					padding: 0,
					overflow: "hidden",
				},
				header: {
					minHeight: 80,
				},
			}}
		>
			{children}
		</Drawer>
	)
}

export { SidebarContainer }
