import { Content } from "antd/es/layout/layout";
import styled from "styled-components";

interface StyledSectionProps {
	backgroundColor: string;
}

const StyledSectionPropsKeys: (keyof StyledSectionProps)[] = ["backgroundColor"];


export const StyledSection = styled.section.withConfig({
	shouldForwardProp: prop => !StyledSectionPropsKeys.includes(prop as keyof StyledSectionProps)
})<StyledSectionProps>`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ backgroundColor }) => backgroundColor}
`;

interface StyledBlockProps {
	backgroundColor: string;
	borderRadius: number;
}

const StyledBlockPropsKeys: (keyof StyledBlockProps)[] = ["borderRadius", "backgroundColor"];

export const StyledBlock = styled(Content).withConfig({
	shouldForwardProp: prop => !StyledBlockPropsKeys.includes(prop as keyof StyledBlockProps),
})<StyledBlockProps>`
	max-width: 480px;
	margin: 24px;
	padding: 40px;
	overflow: hidden;
	border-radius: ${({ borderRadius }) => borderRadius}px;
	background-color: ${({ backgroundColor }) => backgroundColor};
	display: flex;
	flex-direction: column;
	gap: 16px;
`;
