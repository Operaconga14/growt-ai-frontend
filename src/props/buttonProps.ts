export interface ButtonProps {
    buttonText: string;
    style: [{ buttonStyle: string }, { iconStyle: string }];
    onClick: () => void;
}
