import { ConfigProvider, theme } from "antd";
import { FC, ReactNode } from "react";

const AntdProvider: FC<{children: ReactNode}> = ({ children }) => {

	// const { token } = theme.useToken();

	return (
		<ConfigProvider
			theme={{
				algorithm: theme.defaultAlgorithm,
				token: {
					fontFamily: "Roboto, sans-serif",
					colorBgLayout: "#EEF2F6",
					// colorBgLayout: "rgb(17, 25, 54)",
					// colorBgContainer: "rgb(33, 41, 70)"
				},
			}}
		>
			{children}
		</ConfigProvider>
	);
};

export { AntdProvider };
