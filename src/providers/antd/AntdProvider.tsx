import { ConfigProvider, theme } from "antd";
import { FC, ReactNode } from "react";

const AntdProvider: FC<{children: ReactNode}> = ({ children }) => {
	const isDark = false;

	// const { token } = theme.useToken();

	return (
		<ConfigProvider
			theme={{
				algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
				token: {
					fontFamily: "Roboto, sans-serif",
					colorPrimary: isDark ? "rgb(114, 103, 239)" : "rgb(103, 58, 183)",
					colorPrimaryBg: isDark ? "rgba(114, 103, 239, 0.15)" : "rgb(237, 231, 246)",
					colorBgLayout: isDark ? "#111936" : "#EEF2F6",
					colorBgContainer: isDark ? "#212946" : "#FFFFFF",
					// colorBgElevated: isDark ? "#212946" : "#FFFFFF",
				},
			}}
		>
			{children}
		</ConfigProvider>
	);
};

export { AntdProvider };
