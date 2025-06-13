import { Flex } from "antd"
import type { FC } from "react"
import { Logo } from "src/widgets/logo"

const Home: FC = () => {
	return (
		<Flex
			align={"center"}
			justify={"center"}
			flex={1}
		>
			<Logo isLarge={true} />
		</Flex>
	)
}

export default Home
