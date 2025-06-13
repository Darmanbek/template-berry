import ReactDOM from "react-dom/client"
import { Providers } from "src/app/providers"
import { App } from "./app.tsx"
import "./styles/index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Providers>
		<App />
	</Providers>
)
