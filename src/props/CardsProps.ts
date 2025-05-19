import { CSSProperties } from "react";

export interface SimpleCardProps {
    title?: string;
    description?: string;
    className?: string;
    style?: CSSProperties;
}

export interface CustomCardProps {
    title?: string;
    icon?: string;
    description?: string;
    className?: string;
    style?: CSSProperties;
    iconStyle?: CSSProperties;
    cardBodyClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}

export interface ChallengeCardProps {
    title?: string;
    icon?: string;
    description?: string;
    className?: string;
    style?: CSSProperties;
    iconStyle?: CSSProperties;
}
