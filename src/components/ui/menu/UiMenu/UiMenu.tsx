import { ConfigProvider, Menu, MenuProps, theme } from "antd";
import { FC } from "react";

const UiMenu: FC<MenuProps> = (props) => {

	const { token } = theme.useToken();
	// const colors = theme.getDesignToken();
	return (
		<ConfigProvider
			theme={{
				components: {
					Menu: {
						itemHoverBg: token.colorPrimaryBg,
						subMenuItemBg: "transparent",
					}
				}
			}}
		>
			<Menu
				style={{
					borderRight: 0,
				}}
				{...props}
			/>
		</ConfigProvider>
	);
};

export { UiMenu };
