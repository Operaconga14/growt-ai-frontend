import { CSSProperties } from "react";

export interface ImageProps {
    src: string;
    className?: string;
    onClick?: () => void;
    styles?: CSSProperties;
    altText?: string;
}
