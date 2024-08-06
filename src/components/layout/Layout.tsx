import { theme } from "antd";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { NavMenu } from "./NavMenu/NavMenu";
import { Main } from "./Main/Main";
import { StyledLayout, StyledLayoutHasMenu } from "./layout.styles";

const Layout: FC = () => {
	const { token } = theme.useToken();

	return (
		<StyledLayout backgroundColor={token.colorBgContainer}>
			<Header />
			<StyledLayoutHasMenu>
				<NavMenu />
				<Main>
					<Outlet />
				</Main>
			</StyledLayoutHasMenu>
		</StyledLayout>
	);
};

export { Layout };
