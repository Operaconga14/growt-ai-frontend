import type { ButtonProps } from "../props/buttonProps";

export default function Button( props: ButtonProps )
{
    return (
        <>
            <button onClick={props.onClick} className={props.style[ 0 ].buttonStyle}>
                {props.buttonText}
                <i className={props.style[ 1 ].iconStyle}></i>
            </button>
        </>
    )
}