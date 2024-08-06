import { media } from "src/assets/styles/mixin.styles";
import styled from "styled-components";


export const StyledSearchDiv = styled.div`
	flex-basis: 435px;
	flex-grow: 1;
	max-width: 435px;

	${media.xl`
		flex-basis: 250px;
		flex-grow: 1;
		max-width: 250px;
	`}
`;
