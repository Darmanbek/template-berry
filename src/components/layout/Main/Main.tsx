import { FC, ReactNode } from "react";
import styles from "./main.module.scss";

const Main: FC<{children: ReactNode}> = ({ children }) => {
	return (
		<main className={styles.main}>
			{children}
		</main>
	);
};

export { Main };
