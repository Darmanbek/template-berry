import styled from "styled-components";

interface StyledMenuProps {
	backgroundColor: string;
	collapsed: boolean;
}

export const StyledMenu = styled.nav.withConfig({
	shouldForwardProp: prop => !["backgroundColor", "collapsed"].includes(prop)
})<StyledMenuProps>`
	background-color: ${({ backgroundColor }) => backgroundColor};
	height: calc(100vh - 80px);
	padding-inline: ${({ collapsed }) => collapsed ? "0" : "16px"};
	transition: all 0.2s;
	transform-origin: left;
	overflow: hidden;

	&:hover {
		overflow-y: auto;
		overflow-x: hidden;
		scrollbar-width: thin;
	}
`;
