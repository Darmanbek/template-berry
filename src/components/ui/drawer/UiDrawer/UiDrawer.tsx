import { ConfigProvider, Drawer, DrawerProps } from "antd";
import { FC } from "react";

const UiDrawer: FC<DrawerProps> = (props) => {
	return (
		<ConfigProvider>
			<Drawer
				headerStyle={{
					minHeight: 80
				}}
				width={260}
				placement={"left"}
				closable={false}
				mask={false}
				keyboard={false}

				drawerStyle={{
					position: "fixed"
				}}
				rootStyle={{
					position: "fixed",
					width: 260,
					opacity: 1,
					pointerEvents: "all",
					visibility: "visible"
				}}
				styles={{
					wrapper: {
						// boxShadow: "none",
						position: "fixed",
						height: "100%",
						width: 260,
						opacity: 1,
						pointerEvents: "all",
						visibility: "visible"
					},
					content: {
						position: "fixed",
						width: 260,
						opacity: 1,
						pointerEvents: "all",
						visibility: "visible"
					}
				}}
				{...props}
			/>
		</ConfigProvider>
	);
};

export { UiDrawer };
