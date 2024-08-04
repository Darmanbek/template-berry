import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AntdProvider } from "src/providers";
import App from "./App";
import "./assets/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<AntdProvider>
			<App />
		</AntdProvider>
	</BrowserRouter>
);
