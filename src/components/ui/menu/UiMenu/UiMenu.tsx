import { ConfigProvider, Menu, MenuProps, theme } from "antd";
import { FC } from "react";

const UiMenu: FC<MenuProps> = (props) => {

	const colors = theme.getDesignToken({
		components: {
			Menu: {}
		}
	});
	console.log(colors);
	return (
		<ConfigProvider
			theme={{
				components: {
					Menu: {}
				}
			}}
		>
			<Menu
				style={{
					borderRight: 0
				}}
				{...props}
			/>
		</ConfigProvider>
	);
};

export { UiMenu };
