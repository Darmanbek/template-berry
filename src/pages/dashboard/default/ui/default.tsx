import {
	ArrowDownOutlined,
	ArrowUpOutlined,
	CreditCardOutlined,
	LayoutOutlined,
	ShopOutlined,
	ShoppingOutlined,
} from "@ant-design/icons"
import { Avatar, Card, Col, Flex, Row } from "antd"
import type { FC } from "react"
import { TOKEN } from "src/shared/constants"
import { useToken } from "src/shared/hooks"
import { Text, Title } from "src/shared/ui"
import { TagIcon } from "src/widgets/tag-icon"

const firstData = [
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

const secondData = [
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

const Default: FC = () => {
	const { token } = useToken()

	return (
		<>
			<Row
				gutter={token.paddingLG}
				style={{ rowGap: token.paddingLG }}
			>
				{firstData.map((el, index) => (
					<Col
						span={8}
						key={index}
					>
						<Card
							style={{
								height: "100%",
								backgroundColor: el.bgColor,
							}}
							styles={{
								body: {
									height: "inherit",
								},
							}}
						>
							<Flex
								vertical={true}
								justify={"space-between"}
								style={{
									height: "100%",
								}}
							>
								<TagIcon color={el.color}>{el.icon}</TagIcon>
								<Title style={{ color: el.textColor }}>
									<Flex
										align={"center"}
										gap={8}
									>
										{"$" + el.value.toFixed(el.fixed)}

										<Avatar icon={el.suffix} />
									</Flex>
								</Title>
								<Text style={{ color: el.textColor }}>{el.title}</Text>
								{/*<Statistic*/}
								{/*	title={el.title}*/}
								{/*	prefix={"$"}*/}
								{/*	suffix={el.suffix}*/}
								{/*	value={el.value}*/}
								{/*/>*/}
							</Flex>
						</Card>
					</Col>
				))}
				<Col span={8}>
					<Flex
						vertical={true}
						gap={token.paddingLG}
					>
						{secondData.map((el, key) => (
							<Card
								key={key}
								size={"small"}
								style={{
									backgroundColor: el?.bgColor,
								}}
								styles={{
									body: {
										padding: token.padding,
									},
								}}
							>
								<Flex align={"center"}>
									<TagIcon color={el.color}>{el.icon}</TagIcon>
									<div>
										<Title
											style={{
												color: el?.textColor,
											}}
											level={5}
										>{`$${el.value}k`}</Title>
										<Text
											style={{
												color: el?.textColor,
											}}
										>
											{el.title}
										</Text>
									</div>
								</Flex>
							</Card>
						))}
					</Flex>
				</Col>
			</Row>
		</>
	)
}

export default Default
