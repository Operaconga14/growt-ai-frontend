export interface NormalButtonProps {
    text: string;
    onClick: () => void;
    className?: string;
}

export interface IconButtonProps {
    text: string;
    icon: string;
    onClick: () => void;
    className?: string;
    classNameIconText?: string;
}
