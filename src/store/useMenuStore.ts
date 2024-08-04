import { create } from "zustand";

interface IMenuStore {
	open: boolean;
	collapsed: boolean;
	toggleOpen: () => void;
	toggleCollapsed: () => void;
}

const useMenuStore = create<IMenuStore>()(
	(set) => ({
			open: false,
			collapsed: false,
			profileOpen: false,
			toggleOpen: () => set((state) => ({ open: !state.open })),
			toggleCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
		}
	));

export { useMenuStore };
