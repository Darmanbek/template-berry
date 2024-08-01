import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { NavMenu } from "src/components/layout/NavMenu/NavMenu";
import { Main } from "./Main/Main";
import styles from "./layout.module.scss";

const Layout: FC = () => {
	return (
		<section className={styles.layout}>
			<Header />
			<div className={styles["layout-has-menu"]}>
				<NavMenu />
				<Main>
					<Outlet />
				</Main>
			</div>
		</section>
	);
};

export { Layout };
