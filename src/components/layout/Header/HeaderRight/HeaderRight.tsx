import {
	BellOutlined,
	FullscreenExitOutlined,
	FullscreenOutlined,
	GlobalOutlined,
	UserOutlined,
	WifiOutlined
} from "@ant-design/icons";
import { Avatar, Popover } from "antd";
import { FC, useState } from "react";
import screenfull from "screenfull";
import { UiHeadButton, UiHeadProfileButton } from "src/components/ui";
import { useResponsive } from "src/hooks";
import styles from "./header.right.module.scss";

import { Profile } from "./Profile/Profile";

const HeaderRight: FC = () => {
	const { isMobile } = useResponsive(768);
	const [fullScreen, setFullScreen] = useState(false);

	return (
		<div className={styles.right}>
			{!isMobile && (
				<UiHeadButton
					icon={<WifiOutlined />}
				/>
			)}
			<UiHeadButton
				icon={<GlobalOutlined />}
				color={"rgb(103, 58, 183)"}
			/>
			<UiHeadButton
				icon={<BellOutlined />}
			/>
			{!isMobile && (
				<UiHeadButton
					onClick={() => {
						screenfull.toggle();
						setFullScreen(!screenfull.isFullscreen);
					}}
					icon={fullScreen ? <FullscreenExitOutlined style={{ fontSize: 20 }} /> :
						<FullscreenOutlined style={{ fontSize: 20 }} />}
					color={"rgb(103, 58, 183)"}
				/>
			)}
			<Popover
				trigger={"click"}
				placement={"bottomRight"}
				arrow={false}
				content={<Profile />}
			>
				<UiHeadProfileButton>
					<Avatar
						alt={"User"}
						icon={<UserOutlined />}
						style={{ marginTop: 9, marginBottom: 8, marginLeft: 8 }}
					/>
				</UiHeadProfileButton>
			</Popover>
		</div>
	);
};

export { HeaderRight };
