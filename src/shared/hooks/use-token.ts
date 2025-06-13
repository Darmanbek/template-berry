import theme from "antd/es/theme"

export const useToken = () => {
	const { token } = theme.useToken()

	return { token }
}
