import { theme } from "antd";
import { FC } from "react";
import { StyledHeader } from "src/components/layout/Header/header.styles";
import { HeaderLeft } from "./HeaderLeft/HeaderLeft";
import { HeaderRight } from "./HeaderRight/HeaderRight";

const Header: FC = () => {
	const { token } = theme.useToken();

	return (
		<StyledHeader backgroundColor={token.colorBgContainer}>
			<HeaderLeft />
			<HeaderRight />
		</StyledHeader>
	);
};

export { Header };
