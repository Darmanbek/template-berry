import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { menuRoutes } from "./menuRoutes";
import { UiMenu } from "src/components/ui";
import styles from "./menu.module.scss";

const Menu: FC = () => {
	const navigate = useNavigate();

	return (
		<nav className={styles.menu}>
			<UiMenu
				items={menuRoutes}
				onClick={(item) => navigate(item.key)}
			/>
		</nav>
	);
};

export { Menu };
