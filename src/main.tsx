import { ConfigProvider } from "antd";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./assets/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<ConfigProvider
			theme={{
				token: {
					fontFamily: "Roboto, sans-serif",
				}
			}}
		>
			<App />
		</ConfigProvider>
	</BrowserRouter>
);
