import { FC } from "react";
import { App as AntdApp } from "antd";
import { Routes, Route } from "react-router-dom";
import { Layout } from "src/components/layout";
import { Login } from "src/components/screens";
import { routes } from "src/routes";

const App: FC = () => {
	return (
		<Routes>
			<Route path={"/"} element={<Layout />}>
				{routes.map((route, index) => (
					<Route {...route} key={index} />
				))}
			</Route>
			<Route path={"/login"} element={<Login />} />
		</Routes>
	);
};

export default () => (
	<AntdApp>
		<App />
	</AntdApp>
);
