import { SnotifyPosition } from './enums';
/**
 * Snotify default configuration object
 * @type {SnotifyDefaults}
 */
export declare const ToastDefaults: {
    global: {
        newOnTop: boolean;
        maxOnScreen: number;
        maxAtPosition: number;
        oneAtTime: boolean;
        preventDuplicates: boolean;
    };
    toast: {
        type: "simple" | "success" | "error" | "warning" | "info" | "async" | "confirm" | "prompt";
        showProgressBar: boolean;
        timeout: number;
        closeOnClick: boolean;
        pauseOnHover: boolean;
        bodyMaxLength: number;
        titleMaxLength: number;
        backdrop: number;
        icon: any;
        html: any;
        position: SnotifyPosition;
        animation: {
            enter: string;
            exit: string;
            time: number;
        };
    };
    type: {
        [x: string]: {
            timeout: number;
            closeOnClick: boolean;
            buttons: {
                text: string;
                action: any;
                bold: boolean;
            }[];
            placeholder: string;
            type: "simple" | "success" | "error" | "warning" | "info" | "async" | "confirm" | "prompt";
            pauseOnHover?: undefined;
            showProgressBar?: undefined;
        } | {
            timeout: number;
            closeOnClick: boolean;
            buttons: {
                text: string;
                action: any;
                bold: boolean;
            }[];
            type: "simple" | "success" | "error" | "warning" | "info" | "async" | "confirm" | "prompt";
            placeholder?: undefined;
            pauseOnHover?: undefined;
            showProgressBar?: undefined;
        } | {
            type: "simple" | "success" | "error" | "warning" | "info" | "async" | "confirm" | "prompt";
            timeout?: undefined;
            closeOnClick?: undefined;
            buttons?: undefined;
            placeholder?: undefined;
            pauseOnHover?: undefined;
            showProgressBar?: undefined;
        } | {
            pauseOnHover: boolean;
            closeOnClick: boolean;
            timeout: number;
            showProgressBar: boolean;
            type: "simple" | "success" | "error" | "warning" | "info" | "async" | "confirm" | "prompt";
            buttons?: undefined;
            placeholder?: undefined;
        };
    };
};
