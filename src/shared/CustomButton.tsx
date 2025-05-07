import type { CustomButtonProps } from "../props/customButtonProps";

export default function CustomButton( { styles, text, onClick }: CustomButtonProps )
{
    return (
        <button className={styles[ 0 ].buttonStyle} onClick={onClick}>
            {text}
            <i className={styles[ 1 ].iconStyle}></i>
        </button>
    )
}

// btn btn - gradient new- challenge - btn p - 0 px - 3 py - 2
// bi bi - plus - circle text - white fs - 3 p - 0 m - 0