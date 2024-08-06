import styled from "styled-components";

interface StyledLayoutProps {
	backgroundColor: string;
}

export const StyledLayout = styled.section.withConfig({
	shouldForwardProp: prop => !["backgroundColor"].includes(prop)
})<StyledLayoutProps>`
	height: 100vh;
	display: flex;
	flex-direction: column;
	background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const StyledLayoutHasMenu = styled.section`
	height: calc(100vh - 80px);
	display: flex;
	flex-grow: 1;
`;
