import { MenuOutlined, SearchOutlined, SlidersOutlined } from "@ant-design/icons"
import { Button, Flex } from "antd"
import { useResponsive } from "antd-style"
import type { FC } from "react"
import { useMenuStore } from "src/shared/store"
import { UiSearchInput } from "src/shared/ui"
import { Logo } from "src/widgets/logo"

const HeaderLeft: FC = () => {
	const { mobile, xl } = useResponsive()
	const { toggleCollapsed, toggleOpen } = useMenuStore()

	const toggleMenu = mobile ? toggleOpen : toggleCollapsed

	return (
		<Flex
			gap={16}
			align={"center"}
			style={{ flexGrow: 1 }}
		>
			{!mobile && (
				<div style={{ flexBasis: 260 - 32 }}>
					<Logo />
				</div>
			)}
			<div>
				<Button
					variant={"filled"}
					color={"purple"}
					icon={<MenuOutlined />}
					onClick={toggleMenu}
				/>
			</div>
			{mobile ? (
				<div>
					<Button icon={<SearchOutlined />} />
				</div>
			) : (
				<div
					style={{
						flexBasis: xl ? 435 : 250,
						flexGrow: 1,
						display: "flex",
						alignItems: "center",
						maxWidth: xl ? 435 : 250,
					}}
				>
					<UiSearchInput
						suffix={
							<Button
								variant={"filled"}
								color={"purple"}
								onClick={(e) => e.stopPropagation()}
								icon={<SlidersOutlined />}
							/>
						}
					/>
				</div>
			)}
		</Flex>
	)
}

export { HeaderLeft }
