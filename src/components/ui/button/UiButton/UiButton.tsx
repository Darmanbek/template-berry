import { Button, ButtonProps, ConfigProvider } from "antd";
import { FC } from "react";

const UiButton: FC<ButtonProps> = (props) => {
	const { color, ...rest } = props;

	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: color
				}
			}}
		>
			<Button {...rest} />
		</ConfigProvider>
	);
};

export { UiButton };
