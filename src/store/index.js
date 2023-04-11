import { create } from 'zustand';
import * as Energy from '../net/request/energy';

export const useStore = create((set, get) => ({
    energyData: [],
    count: 0,
    setEnergyData: (data) => set((state) => ({ energyData: data})),
    getEnergyData: async () => {
        const response = await Energy.getEnergyData();
        get().setEnergyData(response.data);
    },
    inc: () => set((state) => ({ count: state.count+1 })),
}));