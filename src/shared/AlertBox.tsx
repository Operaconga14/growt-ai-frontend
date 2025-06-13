import type { AlertProps } from "../props/AlertProps";

export function AlertBox( { title, message, alertClassName, messageclassName, titleclassName, role, style }: AlertProps )
{
    return (
        <div className={alertClassName} role={role} style={style}>
            <div className="d-flex justify-content-between">
                <h4 className={titleclassName}>{title}</h4>
                <button className="bg-transparent border-0"><i className="bi-x fs-3 bi text-white"></i></button>
            </div>
            <hr />
            <p className={messageclassName}>{message}</p>
        </div>
    )
}