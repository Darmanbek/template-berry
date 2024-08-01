import { Button, ButtonProps, ConfigProvider, theme } from "antd";
import { FC } from "react";
import styled from "styled-components";

interface StyledUiHeadButtonProps {
	colorPrimary: string;
	colorPrimaryBg: string;
}

const StyledUiHeadButton = styled(Button)<StyledUiHeadButtonProps>`
	color: ${(props) => props.colorPrimary};
	background-color: ${(props) => props.colorPrimaryBg};
  &:hover {
    color: #fff;
  };
`;

const UiHeadButton: FC<ButtonProps> = (props) => {
	const {
		color,
		...rest
	} = props;

	const { token } = theme.useToken();
	const customToken = theme.getDesignToken({
		token: {
			colorPrimary: color || token.colorPrimary
		}
	});

	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: color || token.colorPrimary
				}
			}}
		>
			<StyledUiHeadButton
				colorPrimary={customToken.colorPrimary}
				colorPrimaryBg={customToken.colorPrimaryBg}
				type={"primary"}
				{...rest}
			/>
		</ConfigProvider>
	);
};

export { UiHeadButton };