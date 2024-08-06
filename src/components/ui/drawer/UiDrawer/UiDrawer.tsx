import { ConfigProvider, Drawer, DrawerProps, theme } from "antd";
import { FC } from "react";

const UiDrawer: FC<DrawerProps> = (props) => {
	const { token } = theme.useToken();

	return (
		<ConfigProvider
			theme={{
				components: {
					Drawer: {
						colorBgElevated: token.colorBgContainer
					}
				}
			}}
		>
			<Drawer
				width={260}
				placement={"left"}
				closable={false}
				styles={{
					header: {
						minHeight: 80
					},
				}}
				{...props}
			/>
		</ConfigProvider>
	);
};

export { UiDrawer };
