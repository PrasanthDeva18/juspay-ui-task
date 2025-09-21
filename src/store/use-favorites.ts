import { create } from "zustand";
import { type MenuItem } from "../types/menu";

interface FavoritesState {
  favorites: MenuItem[];
  toggleFavorite: (item: MenuItem) => void;
}

export const useFavorites = create<FavoritesState>((set, get) => ({
  favorites: [],
  toggleFavorite: (item) => {
    const { favorites } = get();
    const exists = favorites.find((f) => f.label === item.label);

    if (exists) {
      set({ favorites: favorites.filter((f) => f.label !== item.label) });
    } else {
      set({ favorites: [...favorites, { ...item, favorite: true }] });
    }
  },
}));
