import { Flex, Tag, type TagProps } from "antd"
import { type FC } from "react"
import { useToken } from "src/shared/hooks"

const TagIcon: FC<TagProps> = ({ children, style, ...props }) => {
	const { token } = useToken()

	return (
		<>
			<Tag
				bordered={false}
				style={{
					width: 46,
					height: 46,
					fontSize: 20,
					borderRadius: token.borderRadiusLG,
					...style,
				}}
				{...props}
			>
				<Flex
					style={{ height: "100%" }}
					justify={"center"}
					align={"center"}
				>
					{children}
				</Flex>
			</Tag>
		</>
	)
}

export { TagIcon }
