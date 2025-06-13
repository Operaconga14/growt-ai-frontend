import type { CSSProperties } from "react";

export interface AlertProps {
    title?: string;
    message?: string;
    titleclassName?: string;
    messageclassName?: string;
    alertClassName?: string;
    onClose?: () => void;
    close?: () => void;
    onShow?: () => void;
    role?: string;
    style?: CSSProperties;
}
