import { media } from "src/assets/styles/mixin.styles";
import styled from "styled-components";


interface StyledMainProps {
	borderRadius: number;
	backgroundColor: string;
}

export const StyledMain = styled.main.withConfig({
	shouldForwardProp: (prop) => !["borderRadius", "backgroundColor"].includes(prop)
})<StyledMainProps>`
	transition: all 0.2s;
	padding: 20px;
	overflow-y: auto;
	overflow-x: hidden;
	border-radius: ${({ borderRadius }) => `${borderRadius}px ${borderRadius}px 0 0`};
	background-color: ${({ backgroundColor }) => backgroundColor};
	margin-right: 20px;
	flex-grow: 1;

	display: flex;
	flex-direction: column;
	gap: 20px;

	${media.md`
		margin-left: 20px;
	`}
`;
