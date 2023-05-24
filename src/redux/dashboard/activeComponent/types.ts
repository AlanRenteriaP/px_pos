export interface ActiveComponentState {
    componentName: string;
}

export type RootState = {
    activeComponent: ActiveComponentState;
}

