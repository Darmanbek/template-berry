import { LoadingOutlined, LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import { theme } from "antd";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UiDivider, UiMenu, UiSearchInput } from "src/components/ui";
import { useNotification } from "src/hooks";
import { sleep } from "src/utils";

import { StyledProfile, StyledProfileHead, StyledSubTitle, StyledTitle } from "./profile.styles";

const Profile: FC = () => {
	const navigate = useNavigate();
	const { notification } = useNotification();
	const [isLoading, setIsLoading] = useState(false);

	const { token } = theme.useToken();

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
		<StyledProfile>
			<StyledProfileHead>
				<StyledTitle
					level={4}
					style={{
						fontSize: token.fontSizeHeading5,
						marginBottom: 0,
						fontWeight: 400
					}}
				>
					<span>Good Morning,</span> JWT User
				</StyledTitle>
				<StyledSubTitle color={token.colorTextTertiary}>Project Admin</StyledSubTitle>
			</StyledProfileHead>
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
		</StyledProfile>
	);
};

export { Profile };
