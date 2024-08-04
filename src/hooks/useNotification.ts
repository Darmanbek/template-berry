import { App } from "antd";

export const useNotification = () => {
	const { notification } = App.useApp();

	return { notification };
};
