import {
	// Dashboard
	DashboardOutlined,
	FundOutlined,
	// Dashboard

	// Widget
	PieChartOutlined,
	DatabaseOutlined,
	BarChartOutlined,
	// Widget

	// Application,
	CaretRightOutlined,

	UserOutlined,
	CustomerServiceOutlined,
	CommentOutlined,
	ProjectOutlined,
	MailOutlined,
	CalendarOutlined,
	ContactsOutlined,
	ShoppingOutlined,
	FileTextOutlined,
	// Application,
} from "@ant-design/icons";
import { MenuProps } from "antd";
//padding-inline: 28px 16px;

export const menuRoutes: MenuProps["items"] = [
	{
		key: "/dashboard",
		label: "Dashboard",
		type: "group",
		children: [
			{
				key: "/dashboard/default",
				label: "Default",
				icon: <DashboardOutlined />,
			},
			{
				key: "/dashboard/analytics",
				label: "Analytics",
				icon: <FundOutlined />,
			},
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
				icon: <PieChartOutlined />,
			},
			{
				key: "/widget/data",
				label: "Data",
				icon: <DatabaseOutlined />,
			},
			{
				key: "/widget/chart",
				label: "Chart",
				icon: <BarChartOutlined />,
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
		key: "/application",
		label: "Application",
		type: "group",
		children: [
			{
				key: "/application/users",
				label: "Users",
				icon: <UserOutlined />,
				children: [
					{
						key: "/application/users/social-profile",
						label: "Social Profile",
						icon: <CaretRightOutlined />,
					},
					{
						key: "/application/users/account-profile",
						label: "Account Profile",
						icon: <CaretRightOutlined />,
					},
					{
						key: "/application/users/cards",
						label: "Cards",
						icon: <CaretRightOutlined />,
					},
					{
						key: "/application/users/list",
						label: "List",
						icon: <CaretRightOutlined />,
					}
				]
			},
			{
				key: "/application/customer",
				label: "Customer",
				icon: <CustomerServiceOutlined />,
				children: [
					{
						key: "/application/customer/customer-list",
						label: "Customer List",
						icon: <CaretRightOutlined />,
					},
					{
						key: "/application/customer/order-list",
						label: "Order List",
						icon: <CaretRightOutlined />,
					},
					{
						key: "/application/customer/create-invoice",
						label: "Create Invoice",
						icon: <CaretRightOutlined />,
					},
					{
						key: "/application/customer/order-details",
						label: "Order Details",
						icon: <CaretRightOutlined />,
					},
					{
						key: "/application/customer/product",
						label: "Product",
						icon: <CaretRightOutlined />,
					},
					{
						key: "/application/customer/product-review",
						label: "Product Review",
						icon: <CaretRightOutlined />,
					}
				]
			},
			{
				key: "/application/chat",
				label: "Chat",
				icon: <CommentOutlined />,
			},
			{
				key: "/application/kanban",
				label: "Kanban",
				icon: <ProjectOutlined />,
			},
			{
				key: "/application/mail",
				label: "Mail",
				icon: <MailOutlined />,
			},
			{
				key: "/application/calendar",
				label: "Calendar",
				icon: <CalendarOutlined />,
			},
			{
				key: "/application/contact",
				label: "Contact",
				icon: <ContactsOutlined />,
				children: [
					{
						key: "/application/contact/cards",
						label: "Cards",
						icon: <CaretRightOutlined />,
					},
					{
						key: "/application/contact/list",
						label: "List",
						icon: <CaretRightOutlined />,
					},
				]
			},
			{
				key: "/application/e-commerce",
				label: "E-commerce",
				icon: <ShoppingOutlined />,
				children: [
					{
						key: "/application/e-commerce/products",
						label: "Products",
						icon: <CaretRightOutlined />,
					},
					{
						key: "/application/e-commerce/product-detail",
						label: "Product Details",
						icon: <CaretRightOutlined />,
					},
					{
						key: "/application/e-commerce/product-list",
						label: "Product List",
						icon: <CaretRightOutlined />,
					},
					{
						key: "/application/e-commerce/checkout",
						label: "Checkout",
						icon: <CaretRightOutlined />,
					},
				]
			},
			{
				key: "/application/invoice",
				label: "Invoice",
				icon: <FileTextOutlined />,
				children: [
					{
						key: "/application/invoice/dashboard",
						label: "Dashboard",
						icon: <CaretRightOutlined />,
					},
					{
						key: "/application/invoice/create",
						label: "Create",
						icon: <CaretRightOutlined />,
					},
					{
						key: "/application/invoice/list",
						label: "List",
						icon: <CaretRightOutlined />,
					},
					{
						key: "/application/invoice/edit",
						label: "Edit",
						icon: <CaretRightOutlined />,
					},
					{
						key: "/application/invoice/details",
						label: "Details",
						icon: <CaretRightOutlined />,
					},
					{
						key: "/application/invoice/client",
						label: "Client",
						icon: <CaretRightOutlined />,
						children: [
							{
								key: "/application/invoice/client/create",
								label: "Create",
								icon: <CaretRightOutlined />,
							},
							{
								key: "/application/invoice/client/list",
								label: "List",
								icon: <CaretRightOutlined />,
							},
						]
					},
					{
						key: "/application/invoice/items",
						label: "Items",
						icon: <CaretRightOutlined />,
						children: [
							{
								key: "/application/invoice/items/create",
								label: "Create",
								icon: <CaretRightOutlined />,
							},
							{
								key: "/application/invoice/items/list",
								label: "List",
								icon: <CaretRightOutlined />,
							},
						]
					},
					{
						key: "/application/invoice/payment",
						label: "Payment",
						icon: <CaretRightOutlined />,
						children: [
							{
								key: "/application/invoice/payment/create",
								label: "Create",
								icon: <CaretRightOutlined />,
							},
							{
								key: "/application/invoice/payment/list",
								label: "List",
								icon: <CaretRightOutlined />,
							},
							{
								key: "/application/invoice/payment/details",
								label: "Details",
								icon: <CaretRightOutlined />,
							},
						]
					},
				]
			},
			{
				key: "/application/crm",
				label: "CRM",
				icon: <CustomerServiceOutlined />,
				children: [
					{
						key: "/application/crm/lead-management",
						label: "Lead Management",
						icon: <CaretRightOutlined />,
						children: [
							{
								key: "/application/crm/lead-management/overview",
								label: "Overview",
								icon: <CaretRightOutlined />,
							},
							{
								key: "/application/crm/lead-management/lead-list",
								label: "Lead List",
								icon: <CaretRightOutlined />,
							},
						]
					},
					{
						key: "/application/crm/contact-management",
						label: "Contact Management",
						icon: <CaretRightOutlined />,
						children: [
							{
								key: "/application/crm/contact-management/contact-card",
								label: "Contact Card",
								icon: <CaretRightOutlined />,
							},
							{
								key: "/application/crm/contact-management/contact-list",
								label: "Contact List",
								icon: <CaretRightOutlined />,
							},
							{
								key: "/application/crm/contact-management/reminders-followup",
								label: "Reminders Followup",
								icon: <CaretRightOutlined />,
							},
							{
								key: "/application/crm/contact-management/communication-history",
								label: "Communication History",
								icon: <CaretRightOutlined />,
							},
						]
					},
					{
						key: "/application/crm/sales-management",
						label: "Sales Management",
						icon: <CaretRightOutlined />,
						children: [
							{
								key: "/application/crm/sales-management/statement",
								label: "Statement",
								icon: <CaretRightOutlined />,
							},
							{
								key: "/application/crm/sales-management/refund",
								label: "Refund",
								icon: <CaretRightOutlined />,
							},
							{
								key: "/application/crm/sales-management/earning",
								label: "Earning",
								icon: <CaretRightOutlined />,
							},
						]
					},
				]
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
		key: "/forms",
		label: "Forms",
		type: "group",
		children: [
			{
				key: "/forms/Components",
				label: "Components",
				icon: <DashboardOutlined />,
			},
			{
				key: "/forms/analytics",
				label: "Plugins",
				icon: <FundOutlined />,
			},
		]
	},
];
