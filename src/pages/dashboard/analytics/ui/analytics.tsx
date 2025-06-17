import { Button, Card, Col, Flex, Row, Table } from "antd"
import type { FC } from "react"

const Analytics: FC = () => {
	return (
		<>
			<Row
				gutter={24}
				style={{ rowGap: 24 }}
			>
				<Col
					xs={24}
					md={16}
				>
					<Flex
						vertical={true}
						gap={24}
					>
						<Card title={"Market Share"}></Card>
						<Row
							gutter={24}
							style={{ rowGap: 24 }}
						>
							<Col
								xs={24}
								sm={12}
							>
								<Card></Card>
							</Col>
							<Col
								xs={24}
								sm={12}
							>
								<Card></Card>
							</Col>
						</Row>
						<Table
							footer={() => (
								<Flex justify={"end"}>
									<Button type={"link"}>View all Latest Customers</Button>
								</Flex>
							)}
						/>
					</Flex>
				</Col>
				<Col
					xs={24}
					md={8}
				>
					<Flex
						vertical={true}
						gap={24}
					>
						<Card></Card>
						<Card title={"Total Revenue"}></Card>
						<Card></Card>
						<Card></Card>
					</Flex>
				</Col>
			</Row>
		</>
	)
}

export default Analytics
