import { MenuProps } from "antd";
import { ProductOutlined } from "@ant-design/icons";

export const menuRoutes: MenuProps["items"] = [
	{
		key: "/dashboard",
		label: "Dashboard",
		type: "group",
		children: [
			{
				key: "/dashboard/default",
				label: "Default",
				icon: <ProductOutlined />,
			},
			{
				key: "/dashboard/analytics",
				label: "Analytics",
				icon: <ProductOutlined />,
			}
		]
	},
	{
		type: "divider",
		style: {
			marginBlock: 10
		}
	},
	{
		key: "/widget",
		label: "Widget",
		type: "group",
		children: [
			{
				key: "/widget/statistics",
				label: "Statistics",
				icon: <ProductOutlined />,
			},
			{
				key: "/widget/data",
				label: "Data",
				icon: <ProductOutlined />,
			},
			{
				key: "/widget/chart",
				label: "Chart",
				icon: <ProductOutlined />,
			}
		]
	},
];
