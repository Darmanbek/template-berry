import { create } from "zustand"

interface MenuStore {
	open: boolean
	collapsed: boolean
	toggleOpen: () => void
	toggleCollapsed: () => void
}

const useMenuStore = create<MenuStore>()((set) => ({
	open: false,
	collapsed: false,
	profileOpen: false,
	toggleOpen: () => set((state) => ({ open: !state.open })),
	toggleCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
}))

export { useMenuStore }
