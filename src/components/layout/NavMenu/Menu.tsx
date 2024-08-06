import { MenuProps, theme } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useMenuStore } from "src/store";
import { menuRoutes } from "./menuRoutes";
import { UiMenu } from "src/components/ui";
import { StyledMenu } from "./menu.styles";

const Menu: FC = () => {
	const navigate = useNavigate();
	const { collapsed } = useMenuStore();

	const { token } = theme.useToken();
	
	const flattenMenuRoutes = (routes: MenuProps["items"]): MenuProps["items"] => {
		if (!collapsed) return routes;

		const flatRoutes: MenuProps["items"] = [];

		routes?.forEach(item => {
			if (!item) return;
			if (item.type === "divider") return;
			if (item.type === "group") {
				const { children } = item;
				if (children) {
					children.forEach(child => {
						flatRoutes.push(child);
					});
				}
			}
		});

		return flatRoutes;
	};

	const routes = flattenMenuRoutes(menuRoutes);

	return (
		<StyledMenu
			backgroundColor={token.colorBgContainer}
			collapsed={collapsed}
		>
			<UiMenu
				mode={"inline"}
				items={routes}
				onClick={(item) => navigate(item.key)}
			/>
		</StyledMenu>
	);
};

export { Menu };
