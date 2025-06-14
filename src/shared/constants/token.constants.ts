import { theme } from "antd"
import type { AliasToken } from "antd/es/theme/interface"

export const LIGHT_TOKEN: Partial<AliasToken> = {
	colorPrimary: "rgb(103, 58, 183)",
	colorPrimaryBg: "rgb(237, 231, 246)",
	colorBgLayout: "#EEF2F6",
	// colorBgElevated: "#FFFFFF",
}

export const DARK_TOKEN: Partial<AliasToken> = {
	colorPrimary: "rgb(114, 103, 239)",
	colorPrimaryBg: "rgb(114, 103, 239, 0.15)",
	colorBgLayout: "#111936",
	colorBgContainer: "#212946",
	// colorBgElevated: "#212946",
}

export const TOKEN = theme.getDesignToken()
