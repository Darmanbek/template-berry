import { FC } from "react";
import { Logo } from "src/components/shared";
import { UiDrawer, UiSider } from "src/components/ui";
import { useMenuStore } from "src/store";
import { Menu } from "./Menu";
import { useResponsive } from "src/hooks";

const NavMenu: FC = () => {
	const { isMobile } = useResponsive(768);
	const { collapsed, open, toggleOpen } = useMenuStore();

	if (isMobile) return (
		<UiDrawer
			open={open}
			onClose={toggleOpen}
			title={<Logo />}
			styles={{
				body: {
					padding: 0,
					overflow: "hidden",
					scrollbarWidth: "thin",
				},
				header: {
					minHeight: 80
				},
			}}
		>
			<Menu />
		</UiDrawer>
	);

	return (
		<UiSider collapsed={collapsed}>
			<Menu />
		</UiSider>
	);
};

export { NavMenu };
