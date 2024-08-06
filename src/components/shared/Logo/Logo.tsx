import { Avatar, theme, Typography } from "antd";
import clsx from "clsx";
import { FC } from "react";
import vite from "/public/vite.svg";
import styles from "./logo.module.scss";

interface LogoProps {
	isLarge?: boolean;
}

const Logo: FC<LogoProps> = ({ isLarge }) => {
	const { token } = theme.useToken();
	return (
		<div className={clsx(styles.logo, isLarge && styles.large)}>
			<Avatar shape={"square"} src={vite} />
			<Typography.Title level={1} style={{ color: token.colorText, marginBottom: 0 }}>Berry Dashboard</Typography.Title>
		</div>
	);
};

export { Logo };
