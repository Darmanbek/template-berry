import { Layout } from "antd"
import { type FC, type PropsWithChildren } from "react"
import { useToken } from "src/shared/hooks"

const InnerLayout: FC<PropsWithChildren> = ({ children }) => {
	const { token } = useToken()

	return (
		<>
			<Layout
				hasSider={true}
				style={{
					backgroundColor: token.colorBgContainer,
				}}
			>
				{children}
			</Layout>
		</>
	)
}

export { InnerLayout }
