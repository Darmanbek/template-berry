import { Flex, Image, theme, Typography } from "antd"
import type { FC } from "react"

interface LogoProps {
	isLarge?: boolean
}

const Logo: FC<LogoProps> = ({ isLarge }) => {
	const { token } = theme.useToken()
	return (
		<Flex
			gap={8}
			align={"center"}
		>
			<Image
				preview={false}
				width={32}
				height={32}
				src={"/vite.svg"}
				fallback={"/public/vite.svg"}
			/>
			<Typography.Title
				level={isLarge ? 3 : 4}
				style={{
					color: token.colorText,
					marginBottom: 0,
					marginTop: 4,
					textTransform: "uppercase",
				}}
			>
				Berry
			</Typography.Title>
		</Flex>
	)
}

export { Logo }
