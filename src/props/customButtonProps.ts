export interface CustomButtonProps {
    styles: [{ buttonStyle: string }, { iconStyle: string }];
    text: string;
    onClick: () => void;
}
