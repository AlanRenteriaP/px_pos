// src/hooks.ts or app/hooks.ts
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '@src/redux/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useDispatchTyped = () => useDispatch<AppDispatch>();