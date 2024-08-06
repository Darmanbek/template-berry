import { MenuOutlined, SearchOutlined, SlidersOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import { FC } from "react";
import { Logo } from "src/components/shared";
import { UiHeadButton, UiSearchInput } from "src/components/ui";
import { useResponsive } from "src/hooks";
import { useMenuStore } from "src/store";

import { StyledSearchDiv } from "./header.left.styles";

const HeaderLeft: FC = () => {
	const { isMobile } = useResponsive(768);
	const { toggleCollapsed, toggleOpen } = useMenuStore();

	const toggleMenu = isMobile ? toggleOpen : toggleCollapsed;

	return (
		<Flex gap={16} align={"center"} style={{ flexGrow: 1 }}>
			{!isMobile &&
				<div style={{ flexBasis: 260 - 32 }}>
					<Logo />
				</div>
			}
			<div>
				<UiHeadButton
					icon={<MenuOutlined />}
					onClick={toggleMenu}
				/>
			</div>
			{isMobile ? (
				<div>
					<UiHeadButton
						icon={<SearchOutlined />}
					/>
				</div>
			) : (
				<StyledSearchDiv>
					<UiSearchInput
						suffix={
							<UiHeadButton
								onClick={(e) => e.stopPropagation()}
								icon={<SlidersOutlined />}
							/>
						}
					/>
				</StyledSearchDiv>
			)}
		</Flex>

	);
};

export { HeaderLeft };
