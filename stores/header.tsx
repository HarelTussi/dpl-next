import create from "zustand";

interface HeaderState {
  isDrawerOpen: boolean;
  isDropdownOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  openDropdown: () => void;
  closeDropdown: () => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
  isDrawerOpen: false,
  isDropdownOpen: false,
  openDrawer: () => set((state) => ({ ...state, isDrawerOpen: true })),
  closeDrawer: () => set((state) => ({ ...state, isDrawerOpen: false })),
  openDropdown: () => set((state) => ({ ...state, isDropdownOpen: true })),
  closeDropdown: () => set((state) => ({ ...state, isDropdownOpen: false })),
}));
