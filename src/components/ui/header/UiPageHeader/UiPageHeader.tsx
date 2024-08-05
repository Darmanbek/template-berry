import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { FC } from "react";
import styled from "styled-components";

const StyledPageHeader = styled(Content)`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const UiPageHeader: FC = () => {
	return (
		<StyledPageHeader>
			<Typography.Title level={3}>
				UiPageHeader
			</Typography.Title>
			<Breadcrumb
				items={[
					{
						href: "/",
						title: <HomeOutlined />,
					},
					{
						href: "",
						title: (
							<>
								<UserOutlined />
								<span>Application List</span>
							</>
						),
					},
					{
						title: "Application",
					},
				]}
			/>
		</StyledPageHeader>
	);
};

export { UiPageHeader };
