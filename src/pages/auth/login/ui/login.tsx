import { Link, useNavigate } from "@tanstack/react-router"
import { Card, Checkbox, Flex, Form, type FormProps, Input, theme, Typography } from "antd"
import type { FC } from "react"
import { useState } from "react"
import { useApp } from "src/shared/hooks"
import { UiButton, UiDivider } from "src/shared/ui"
import { sleep } from "src/shared/utils"
import { Logo } from "src/widgets/logo"

type TLogin = {
	email: string
	password: string
	remember: boolean
}

const Login: FC = () => {
	const [form] = Form.useForm<TLogin>()
	const { notification } = useApp()
	const [isLoading, setIsLoading] = useState(false)
	const navigate = useNavigate()

	const onFinish: FormProps<TLogin>["onFinish"] = (values) => {
		console.log(values)
		setIsLoading(true)
		sleep(() => {
			setIsLoading(false)
			notification.success({
				message: "Success!",
				placement: "top",
			})
			navigate({
				to: "/",
				replace: true,
			})
		})
	}

	const { token } = theme.useToken()
	return (
		<Card
			style={{
				maxWidth: 480,
				width: "100%",
				margin: 24,
				overflow: "hidden",
				borderRadius: token.borderRadiusLG,
				display: "flex",
				flexDirection: "column",
				gap: 16,
			}}
			styles={{
				body: {
					padding: 40,
				},
			}}
		>
			<Flex
				align={"center"}
				justify={"center"}
				style={{
					marginBottom: 24,
				}}
			>
				<Logo />
			</Flex>
			<Flex
				vertical={true}
				justify={"center"}
				align={"center"}
				style={{
					marginBottom: 24,
				}}
			>
				<Typography.Title
					level={3}
					style={{
						color: token.colorPrimary,
					}}
				>
					Hi, Welcome Back
				</Typography.Title>
				<Typography.Text style={{ color: token.colorTextTertiary, fontSize: 16 }}>
					Enter your credentials to continue
				</Typography.Text>
			</Flex>
			<Form
				name={"login"}
				form={form}
				onFinish={onFinish}
				size={"large"}
				layout={"vertical"}
				initialValues={{
					email: "berrydashboard@example.com",
					password: "12345678",
					remember: true,
				}}
			>
				<Form.Item
					name={"email"}
					label={"Email Address / Username"}
					labelCol={{
						style: {
							display: "none",
						},
					}}
					rules={[{ type: "email" }, { required: true }]}
				>
					<Input placeholder={"Email Address / Username"} />
				</Form.Item>
				<Form.Item
					name={"password"}
					label={"Password"}
					labelCol={{
						style: {
							display: "none",
						},
					}}
					rules={[{ required: true }]}
				>
					<Input.Password placeholder={"Password"} />
				</Form.Item>
				<Flex
					justify={"space-between"}
					align={"baseline"}
				>
					<Form.Item
						name={"remember"}
						valuePropName={"checked"}
					>
						<Checkbox>Keep me logged in</Checkbox>
					</Form.Item>
					<Link
						to={"/forgot-password"}
						target={"_blank"}
					>
						Forgot Password?
					</Link>
				</Flex>
				<Form.Item>
					<UiButton
						loading={isLoading}
						block={true}
						type={"primary"}
						htmlType={"submit"}
					>
						Sign In
					</UiButton>
				</Form.Item>
				<UiDivider />
				<Flex justify={"center"}>
					<Typography.Link
						href={"/"}
						target={"_blank"}
					>
						Don't have an account?
					</Typography.Link>
				</Flex>
			</Form>
		</Card>
	)
}

export default Login
