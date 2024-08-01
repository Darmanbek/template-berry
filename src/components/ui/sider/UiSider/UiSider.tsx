import { ConfigProvider, SiderProps } from "antd";
import Sider from "antd/es/layout/Sider";
import { FC } from "react";

const UiSider: FC<SiderProps> = (props) => {
	return (
		<ConfigProvider>
			<Sider
				width={260}
				{...props}
			/>
		</ConfigProvider>
	);
};

export { UiSider };
