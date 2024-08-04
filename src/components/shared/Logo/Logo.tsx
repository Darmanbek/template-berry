import { Avatar, theme } from "antd";
import { FC } from "react";
import vite from "/public/vite.svg";
import styles from "./logo.module.scss";

const Logo: FC = () => {
	const { token } = theme.useToken();
	return (
		<div className={styles.logo}>
			<Avatar shape={"square"} src={vite} />
			<h1 style={{ color: token.colorText }}>Berry Dashboard</h1>
		</div>
	);
};

export { Logo };
