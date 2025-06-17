import { DownOutlined, EllipsisOutlined, RightOutlined, UpOutlined } from "@ant-design/icons"
import { Avatar, Button, Card, Col, Flex, List, Row, Select, Statistic, Tag } from "antd"
import EChartsReact from "echarts-for-react"
import type { FC } from "react"
import { useToken } from "src/shared/hooks"
import { Text, Title } from "src/shared/ui"
import { formatCountUp } from "src/shared/utils"
import { TagIcon } from "src/widgets/tag-icon"
import { listData } from "./list.data.ts"
import { optionData, optionSecondData } from "./option.data.ts"
import { firstData, secondData } from "./statistics.data.tsx"

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
						xs={24}
						md={12}
						xl={8}
						key={index}
					>
						<Card
							style={{
								height: "100%",
								backgroundColor: el.bgColor,
								overflow: "hidden",
							}}
							variant={"borderless"}
							styles={{
								body: {
									height: "inherit",
									position: "relative",
								},
							}}
						>
							<div
								style={{
									position: "absolute",
									top: -125,
									right: -15,
									width: 210,
									height: 210,
									backgroundColor: el.color,
									borderRadius: "50%",
									opacity: 0.5,
								}}
							></div>
							<div
								style={{
									position: "absolute",
									top: -85,
									right: -95,
									width: 210,
									height: 210,
									backgroundColor: el.color,
									borderRadius: "50%",
								}}
							></div>
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
										{formatCountUp(el.value, {
											prefix: "$",
											decimals: el.fixed,
										})}
										<Avatar icon={el.suffix} />
									</Flex>
								</Title>
								<Text style={{ color: el.textColor }}>{el.title}</Text>
							</Flex>
						</Card>
					</Col>
				))}
				<Col
					xs={24}
					xl={8}
				>
					<Row
						gutter={token.paddingLG}
						style={{ rowGap: token.paddingLG }}
					>
						{secondData.map((el, key) => (
							<Col
								key={key}
								xs={24}
								md={12}
								xl={24}
							>
								<Card
									size={"small"}
									variant={"borderless"}
									style={{
										backgroundColor: el?.bgColor,
										overflow: "hidden",
									}}
									styles={{
										body: {
											padding: token.padding,
											position: "relative",
										},
									}}
								>
									<div
										style={{
											position: "absolute",
											top: -160,
											right: -130,
											width: 210,
											height: 210,
											backgroundColor: el.color,
											borderRadius: "50%",
											opacity: 0.2,
										}}
									></div>
									<div
										style={{
											position: "absolute",
											top: -30,
											right: -180,
											width: 210,
											height: 210,
											backgroundColor: el.color,
											borderRadius: "50%",
											opacity: 0.4,
										}}
									></div>
									<Flex align={"center"}>
										<TagIcon color={el.color}>{el.icon}</TagIcon>
										<div>
											<Title
												style={{
													color: el?.textColor,
												}}
												level={5}
											>
												{formatCountUp(el.value, {
													prefix: "$",
													suffix: "k",
												})}
											</Title>
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
							</Col>
						))}
					</Row>
				</Col>
			</Row>
			<Row
				gutter={token.paddingLG}
				style={{
					rowGap: token.paddingLG,
				}}
			>
				<Col
					xs={24}
					md={16}
				>
					<Card
						style={{
							height: "100%",
						}}
						styles={{
							body: {
								height: "calc(100% - 100px)",
							},
						}}
					>
						<Flex
							gap={8}
							style={{ marginBottom: token.marginLG }}
							justify={"space-between"}
						>
							<Statistic
								title={"Total Growth"}
								value={2324}
								formatter={(value) =>
									formatCountUp(value, {
										decimals: 2,
										prefix: "$",
									})
								}
							/>
							<Select
								size={"large"}
								variant={"filled"}
								popupMatchSelectWidth={false}
								defaultValue={"1"}
								options={[
									{
										value: "1",
										label: "Today",
									},
									{
										value: "2",
										label: "This Month",
									},
									{
										value: "3",
										label: "This Year",
									},
								]}
							/>
						</Flex>
						<EChartsReact
							option={optionData}
							style={{ height: "100%", minHeight: 480 }}
						/>
					</Card>
				</Col>
				<Col
					xs={24}
					md={8}
				>
					<Card
						title={"Popular Stocks"}
						styles={{
							body: {
								paddingBottom: token.paddingXXS,
							},
						}}
						extra={
							<Button
								shape={"circle"}
								icon={<EllipsisOutlined />}
								type={"text"}
							/>
						}
					>
						<Tag
							bordered={false}
							color={"purple"}
							style={{
								padding: 0,
								width: "100%",
								overflow: "hidden",
								marginRight: 0,
							}}
						>
							<Flex
								gap={8}
								style={{
									padding: `${token.padding}px ${token.padding}px 0`,
								}}
								justify={"space-between"}
							>
								<div>
									<h6 style={{ fontSize: token.fontSize }}>Bajaj Finery</h6>
									<Text type={"secondary"}>10% Profit</Text>
								</div>
								<Title level={5}>
									{formatCountUp(1839, {
										prefix: "$",
										decimals: 2,
									})}
								</Title>
							</Flex>
							<EChartsReact
								option={optionSecondData}
								style={{
									height: 95,
								}}
							/>
						</Tag>
						<List
							dataSource={listData}
							footer={
								<Flex justify={"center"}>
									<Button
										type={"link"}
										icon={<RightOutlined />}
										iconPosition={"end"}
									>
										View All
									</Button>
								</Flex>
							}
							renderItem={(item, index) => (
								<List.Item
									key={index}
									style={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "start",
										gap: 8,
									}}
								>
									<div>
										<h6 style={{ fontSize: token.fontSize }}>{item.name}</h6>
										<Text
											style={{ fontSize: token.fontSizeSM }}
											type={item.loss ? "danger" : "success"}
										>
											{`${item.percent} ${item.loss ? "loss" : "profit"}`}
										</Text>
									</div>
									<Flex
										gap={16}
										align={"start"}
									>
										<h6 style={{ fontSize: token.fontSize }}>
											{formatCountUp(item.price, {
												prefix: "$",
												decimals: 2,
											})}
										</h6>
										<Tag
											bordered={false}
											style={{
												padding: 0,
												width: 20,
												height: 20,
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
											}}
											icon={item.loss ? <DownOutlined /> : <UpOutlined />}
											color={item.loss ? "error" : "success"}
										/>
									</Flex>
								</List.Item>
							)}
						/>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default Default
