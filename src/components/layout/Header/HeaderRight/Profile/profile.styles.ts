import { Typography } from "antd";
import styled from "styled-components";


export const StyledProfile = styled.div`
	min-width: 300px;
`;

export const StyledProfileHead = styled.div`
	margin-bottom: 16px;
`;

export const StyledTitle = styled(Typography.Title)`
	span {
		font-size: 1rem;
		font-weight: 600;
	}
`;

interface StyledSubTitleProps {
	color?: string;
}

export const StyledSubTitle = styled(Typography.Text)<StyledSubTitleProps>`
	font-size: 0.75rem;
	font-weight: 400;
	color: ${({ color }) => color || "rgb(105, 117, 134)"};
`;
