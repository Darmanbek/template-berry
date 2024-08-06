import { theme } from "antd";
import { FC, ReactNode } from "react";
import { StyledMain } from "./main.styles";

const Main: FC<{children: ReactNode}> = ({ children }) => {

	const { token } = theme.useToken();
	return (
		<StyledMain
			borderRadius={token.borderRadiusLG}
			backgroundColor={token.colorBgLayout}
		>
			{children}
		</StyledMain>
	);
};

export { Main };
