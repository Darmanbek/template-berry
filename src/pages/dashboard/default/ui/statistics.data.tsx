import {
	ArrowDownOutlined,
	ArrowUpOutlined,
	CreditCardOutlined,
	LayoutOutlined,
	ShopOutlined,
	ShoppingOutlined,
} from "@ant-design/icons"
import { TOKEN } from "src/shared/constants"

export const firstData = [
	{
		icon: <CreditCardOutlined />,
		title: "Total Earning",
		color: TOKEN.purple8,
		bgColor: TOKEN.purple7,
		textColor: "#fff",
		suffix: <ArrowUpOutlined rotate={45} />,
		value: 500,
		fixed: 2,
	},
	{
		icon: <ShoppingOutlined />,
		title: "Total Order",
		color: TOKEN.blue8,
		bgColor: TOKEN.blue7,
		textColor: "#fff",
		suffix: <ArrowDownOutlined rotate={45} />,
		value: 108,
		fixed: 0,
	},
]

export const secondData = [
	{
		icon: <LayoutOutlined />,
		title: "Total Income",
		color: TOKEN.blue8,
		bgColor: TOKEN.blue7,
		textColor: "#fff",
		value: 203,
	},
	{
		icon: <ShopOutlined />,
		title: "Total Income",
		color: "orange" as const,
		// bgColor: "",
		// textColor: "",
		value: 203,
	},
]
