import { useNavigate } from "@tanstack/react-router"
import { Button, Flex, Result } from "antd"
import type { FC } from "react"

const NotFound: FC = () => {
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
			/>
		</Flex>
	)
}

export default NotFound
