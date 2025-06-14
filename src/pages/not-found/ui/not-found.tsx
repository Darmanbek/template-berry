import { type NotFoundRouteProps, useNavigate } from "@tanstack/react-router"
import { Button, Flex, Result } from "antd"
import type { FC } from "react"

const NotFound: FC<NotFoundRouteProps> = ({ data }) => {
	const navigate = useNavigate()

	return (
		<Flex
			align={"center"}
			justify={"center"}
			flex={1}
		>
			<Result
				status={"404"}
				title={"404"}
				subTitle={"Sorry, the page you visited does not exist."}
				extra={
					<Button
						onClick={() =>
							navigate({
								to: "/",
							})
						}
						type={"primary"}
					>
						Back Home
					</Button>
				}
				children={typeof data === "string" ? data : JSON.stringify(data)}
			/>
		</Flex>
	)
}

export default NotFound
