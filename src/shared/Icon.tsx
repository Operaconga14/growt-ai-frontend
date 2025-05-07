import type { IconProps } from "../props/IconProps";


export default function Icon( { iconStyle, name }: IconProps )
{
    return (
        <i className={`${name} ${iconStyle}`} ></i>
    )
}