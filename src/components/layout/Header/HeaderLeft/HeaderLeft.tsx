import { MenuOutlined, SlidersOutlined } from "@ant-design/icons";
import { FC } from "react";
import { UiHeadButton, UiSearchInput } from "src/components/ui";
import styles from "./header.left.module.scss";

const HeaderLeft: FC = () => {
	return (
		<div className={styles.left}>
			<div className={styles.logo}>
				<h1>Berry Dashboard</h1>

				<UiHeadButton
					icon={<MenuOutlined />}
				/>
			</div>
			<div className={styles.search}>
				<UiSearchInput
					suffix={
						<UiHeadButton
							onClick={(e) => e.stopPropagation()}
							icon={<SlidersOutlined />}
						/>
					}
				/>
			</div>
		</div>

	);
};

export { HeaderLeft };
