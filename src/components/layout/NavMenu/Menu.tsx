import { MenuProps } from "antd";
import { FC } from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useMenuStore } from "src/store";
import { menuRoutes } from "./menuRoutes";
import { UiMenu } from "src/components/ui";
import styles from "./menu.module.scss";

const Menu: FC = () => {
	const navigate = useNavigate();
	const { collapsed } = useMenuStore();

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
		<nav className={clsx(styles.menu, collapsed && styles.collapsed)}>
			<UiMenu
				mode={"inline"}
				items={routes}
				onClick={(item) => navigate(item.key)}
			/>
		</nav>
	);
};

export { Menu };
