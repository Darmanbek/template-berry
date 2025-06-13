import { LoadingOutlined, LogoutOutlined, SettingOutlined } from "@ant-design/icons"
import { useNavigate } from "@tanstack/react-router"
import { theme } from "antd"
import type { FC } from "react"
import { useState } from "react"
import { useApp } from "src/shared/hooks"
import { Text, Title, UiDivider, UiMenu, UiSearchInput } from "src/shared/ui"
import { sleep } from "src/shared/utils"

const Profile: FC = () => {
	const navigate = useNavigate()
	const { notification } = useApp()
	const [isLoading, setIsLoading] = useState(false)

	const { token } = theme.useToken()

	const handleNavigate = async (key: string) => {
		if (key === "/logout") {
			setIsLoading(true)
			console.log("Logout")
			await sleep(() => {
				notification.success({
					message: "Success!",
				})
				setIsLoading(false)
				navigate({
					to: "/login",
				})
			})
		} else {
			await navigate({
				to: key,
			})
		}
	}

	return (
		<div
			style={{
				minWidth: 300,
			}}
		>
			<div style={{ marginBottom: 16 }}>
				<Title
					level={5}
					style={{
						fontWeight: 400,
					}}
				>
					<span style={{ fontSize: 16, fontWeight: 600 }}>Good Morning,</span> JWT User
				</Title>
				<Text
					style={{
						fontSize: 12,
						fontWeight: 400,
						color: token.colorTextTertiary || "rgb(105, 117, 134)",
					}}
				>
					Project Admin
				</Text>
			</div>
			<UiSearchInput placeholder={"Search profile options"} />
			<UiDivider />
			<UiMenu
				onClick={(item) => handleNavigate(item.key)}
				items={[
					{
						key: "/account-profile",
						label: "Account settings",
						icon: <SettingOutlined />,
					},
					{
						key: "/logout",
						label: "Logout",
						disabled: isLoading,
						icon: isLoading ? <LoadingOutlined spin={true} /> : <LogoutOutlined />,
					},
				]}
			/>
		</div>
	)
}

export { Profile }
