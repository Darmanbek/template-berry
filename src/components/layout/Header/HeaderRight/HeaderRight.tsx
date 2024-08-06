import {
	BellOutlined,
	FullscreenExitOutlined,
	FullscreenOutlined,
	GlobalOutlined,
	UserOutlined,
	WifiOutlined
} from "@ant-design/icons";
import { Avatar, Flex, Popover, Tooltip } from "antd";
import { FC, useState } from "react";
import screenfull from "screenfull";
import { UiHeadButton, UiHeadProfileButton } from "src/components/ui";
import { useResponsive } from "src/hooks";

import { Profile } from "./Profile/Profile";

const HeaderRight: FC = () => {
	const { isMobile } = useResponsive(768);
	const [fullScreen, setFullScreen] = useState(false);

	return (
		<Flex gap={16} align={"center"}>
			{!isMobile && (
				<UiHeadButton
					icon={<WifiOutlined />}
					color={"#1677FF"}
				/>
			)}
			<UiHeadButton
				icon={<GlobalOutlined />}
			/>
			<UiHeadButton
				icon={<BellOutlined />}
				color={"#1677FF"}
			/>
			{!isMobile && (
				<Tooltip title={"Fullscreen"}>
					<UiHeadButton
						onClick={() => {
							screenfull.toggle();
							setFullScreen(!screenfull.isFullscreen);
						}}
						icon={fullScreen ? <FullscreenExitOutlined style={{ fontSize: 20 }} /> :
							<FullscreenOutlined style={{ fontSize: 20 }} />}
					/>
				</Tooltip>
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
		</Flex>
	);
};

export { HeaderRight };
