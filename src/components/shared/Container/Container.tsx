import { theme } from "antd";
import { FC, ElementType, PropsWithChildren } from "react";
import styled, { RuleSet } from "styled-components";

interface StyledComponentProps {
	backgroundColor: string;
	borderRadius: number;
	styled?: RuleSet<object>;
}

const StyledComponent = styled.div.withConfig({
	shouldForwardProp: prop => !["backgroundColor"].includes(prop)
})<StyledComponentProps>`
	padding: 16px;
	background-color: ${({ backgroundColor }) => backgroundColor};
	border-radius: ${({ borderRadius }) => borderRadius}px;
	${({ styled }) => styled && styled}
`;


interface ContainerProps {
	component?: ElementType;
	styled?: RuleSet<object>;
}

const Container: FC<PropsWithChildren<ContainerProps>> = ({ component, styled, ...rest }) => {

	const { token } = theme.useToken();

	return (
		<StyledComponent
			backgroundColor={token.colorBgContainer}
			borderRadius={token.borderRadiusLG}
			as={component}
			styled={styled}
			{...rest}
		/>
	);
};

export { Container };
