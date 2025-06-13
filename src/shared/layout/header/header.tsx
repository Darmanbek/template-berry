import type { FC } from "react"
import { useToken } from "src/shared/hooks"
import { LayoutHeader } from "src/shared/ui"
import { HeaderLeft } from "./header-left.tsx"
import { HeaderRight } from "./header-right"

const Header: FC = () => {
	const { token } = useToken()

	return (
		<LayoutHeader
			style={{
				minHeight: 80,
				display: "flex",
				lineHeight: 1,
				alignItems: "center",
				padding: "16px 24px",
				gap: 16,
				backgroundColor: token.colorBgContainer,
			}}
		>
			<HeaderLeft />
			<HeaderRight />
		</LayoutHeader>
	)
}

export { Header }
