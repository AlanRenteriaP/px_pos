// menuItemSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { MaterialType, MenuItem } from './types';

interface MenuItemState {
    currentMenuItem: MenuItem;
}

const initialState: MenuItemState = {
    currentMenuItem: {
        name: '',
        description: '',
        materials: [],
    },
};

const menuItemSlice = createSlice({
    name: 'menuItem',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.currentMenuItem.name = action.payload;
        },
        setDescription: (state, action: PayloadAction<string>) => {
            state.currentMenuItem.description = action.payload;
        },
        addMaterial: (state, action: PayloadAction<MaterialType>) => {
            state.currentMenuItem.materials.push(action.payload);
        },
        removeMaterial: (state, action: PayloadAction<number>) => {
            state.currentMenuItem.materials.splice(action.payload, 1);
        },
        resetMenuItem: (state) => {
            state.currentMenuItem = { name: '', description: '', materials: [] };
        },
        // Optional: Define more actions as needed
    },
});

export const { setName, setDescription, addMaterial, removeMaterial, resetMenuItem } = menuItemSlice.actions;


export { menuItemSlice};
