import { Button, ButtonProps, ConfigProvider, theme } from "antd";
import { FC } from "react";

const UiButton: FC<ButtonProps> = (props) => {
	const { color, ...rest } = props;
	const { token } = theme.useToken();
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: color || token.colorPrimary
				}
			}}
		>
			<Button {...rest} />
		</ConfigProvider>
	);
};

export { UiButton };
