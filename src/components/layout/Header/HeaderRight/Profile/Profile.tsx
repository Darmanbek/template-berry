import { LoadingOutlined, LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UiDivider, UiMenu, UiSearchInput } from "src/components/ui";
import { useNotification } from "src/hooks";
import { sleep } from "src/utils";
import styles from "./profile.module.scss";

const Profile: FC = () => {
	const navigate = useNavigate();
	const { notification } = useNotification();
	const [isLoading, setIsLoading] = useState(false);

	const handleNavigate = (key: string) => {
		if (key === "/logout") {
			setIsLoading(true);
			console.log("Logout");
			sleep(() => {
				notification.success({
					message: "Success!",
					placement: "top"
				});
				navigate("/login");
			});
		} else {
			navigate(key);
		}
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
						disabled: isLoading,
						icon: isLoading ? <LoadingOutlined spin={true} /> : <LogoutOutlined />
					}
				]}
			/>
		</div>
	);
};

export { Profile };
