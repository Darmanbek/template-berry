import { Checkbox, Flex, Form, FormProps, Input, theme, Typography } from "antd";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "src/components/shared";
import { UiButton, UiDivider } from "src/components/ui";
import { useNotification } from "src/hooks";
import { sleep } from "src/utils";

import {
	StyledSection,
	StyledBlock
} from "./login.styles";

type TLogin = {
	email: string;
	password: string;
	remember: boolean;
}

const Login: FC = () => {
	const [form] = Form.useForm<TLogin>();
	const { notification } = useNotification();
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const onFinish: FormProps<TLogin>["onFinish"] = (values) => {
		console.log(values);
		setIsLoading(true);
		sleep(() => {
			setIsLoading(false);
			notification.success({
				message: "Success!",
				placement: "top"
			});
			navigate("/", { replace: true });
		});
	};

	const { token } = theme.useToken();
	return (
		<StyledSection backgroundColor={token.colorBgLayout}>
			<StyledBlock
				backgroundColor={token.colorBgContainer}
				borderRadius={token.borderRadiusLG}
			>
				<Flex
					align={"center"}
					justify={"center"}
					style={{
						marginBottom: 24
					}}
				>
					<Logo />
				</Flex>
				<Flex
					vertical={true}
					justify={"center"}
					align={"center"}
					style={{
						marginBottom: 24
					}}
				>
					<Typography.Title
						level={3}
						style={{
							color: token.colorPrimary
						}}
					>
						Hi, Welcome Back
					</Typography.Title>
					<Typography.Text
						style={{ color: token.colorTextTertiary, fontSize: 16 }}
					>
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
						remember: true
					}}
				>
					<Form.Item
						name={"email"}
						label={"Email Address / Username"}
						labelCol={{
							style: {
								display: "none"
							}
						}}
						rules={[
							{ type: "email" },
							{ required: true }
						]}
					>
						<Input placeholder={"Email Address / Username"} />
					</Form.Item>
					<Form.Item
						name={"password"}
						label={"Password"}
						labelCol={{
							style: {
								display: "none"
							}
						}}
						rules={[{ required: true }]}
					>
						<Input.Password placeholder={"Password"} />
					</Form.Item>
					<Flex justify={"space-between"} align={"baseline"}>
						<Form.Item
							name="remember"
							valuePropName="checked"
						>
							<Checkbox>Keep me logged in</Checkbox>
						</Form.Item>
						<Typography.Link
							href={"/"}
							target={"_blank"}
						>
							Forgot Password?
						</Typography.Link>
					</Flex>
					<Form.Item>
						<UiButton loading={isLoading} block={true} type="primary" htmlType="submit">
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

			</StyledBlock>
		</StyledSection>
	);
};

export { Login };
