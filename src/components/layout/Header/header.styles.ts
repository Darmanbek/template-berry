import styled from "styled-components";

interface StyledHeaderProps {
	backgroundColor: string;
}

export const StyledHeader = styled.header.withConfig({
	shouldForwardProp: prop => !["backgroundColor"].includes(prop)
})<StyledHeaderProps>`
	min-height: 80px;
	display: flex;
	align-items: center;
	padding: 0 16px;
	gap: 16px;
	background-color: ${({ backgroundColor }) => backgroundColor};
`;
