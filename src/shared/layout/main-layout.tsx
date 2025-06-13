import { Layout } from "antd"
import { type FC, type PropsWithChildren } from "react"
import { useToken } from "src/shared/hooks"

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	const { token } = useToken()

	return (
		<>
			<Layout
				style={{
					minHeight: "100vh",
					backgroundColor: token.colorBgContainer,
				}}
			>
				{children}
			</Layout>
		</>
	)
}

export { MainLayout }
