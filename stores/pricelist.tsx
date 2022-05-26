import create from "zustand";

interface PriceListState {
  listType: "round" | "fancy";
  setListType: (listType: "round" | "fancy") => void;
  quickFindIsOpen: boolean;
  setQuickFindIsOpen: (isOpen: boolean) => void;
}

export const usePriceListStore = create<PriceListState>((set) => ({
  quickFindIsOpen: false,
  setQuickFindIsOpen: (isOpen: boolean) =>
    set((state) => ({ ...state, quickFindIsOpen: isOpen })),
  listType: "round",
  setListType: (listType: "round" | "fancy") =>
    set((state) => ({ ...state, listType })),
}));
