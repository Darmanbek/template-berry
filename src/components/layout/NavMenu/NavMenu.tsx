import { FC } from "react";
import { UiDrawer, UiSider } from "src/components/ui";
import { useMenuStore } from "src/store";
import { Menu } from "./Menu";
import { useResponsive } from "src/hooks";
import styles from "./menu.module.scss";

const NavMenu: FC = () => {
	const { isMobile } = useResponsive(768);
	const { collapsed, open } = useMenuStore();

	if (isMobile) return (
		<UiDrawer open={open}>
			<Menu />
		</UiDrawer>
	);

	return (
		<UiSider className={styles.sider} collapsed={collapsed}>
			<Menu />
		</UiSider>
	);
};

export { NavMenu };
