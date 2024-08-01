import { FC } from "react";
import { UiDrawer, UiSider } from "src/components/ui";
import { Menu } from "./Menu";
import { useResponsive } from "src/hooks";

const NavMenu: FC = () => {
	const { isMobile } = useResponsive(768);

	if (isMobile) return (
		<UiDrawer>
			<Menu />
		</UiDrawer>
	);

	return (
		<UiSider>
			<Menu />
		</UiSider>
	);
};

export { NavMenu };
