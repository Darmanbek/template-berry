import { LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { UiDivider, UiMenu, UiSearchInput } from "src/components/ui";
import styles from "./profile.module.scss";

const Profile: FC = () => {
	const navigate = useNavigate();

	const handleNavigate = (key: string) => {
		if (key === "/logout") {
			console.log("Logout");
		}
		navigate(key);
	};

	return (
		<div className={styles.profile}>
			<div className={styles.head}>
				<h4 className={styles.title}><span>Good Morning,</span> JWT User</h4>
				<p className={styles.subtitle}>Project Admin</p>
			</div>
			<UiSearchInput
				placeholder={"Search profile options"}
			/>
			<UiDivider />
			<UiMenu
				onClick={(item) => handleNavigate(item.key)}
				items={[
					{
						key: "/account-profile",
						label: "Account settings",
						icon: <SettingOutlined />
					},
					{
						key: "/logout",
						label: "Logout",
						icon: <LogoutOutlined />
					}
				]}
			/>
		</div>
	);
};

export { Profile };
