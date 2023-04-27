export interface Alert {
    id: string;
    msg: string;
    alertType: AlertType;
}

export type AlertType = 'error' | 'warning' | 'info' | 'success';