import Icon from "./Icon";
import { ProfileProps } from '../props/profileProps';

export default function Profile( props: ProfileProps )
{
    return (
        <div className="d-flex align-items-center gap-2">
            <Icon iconStyle={""} name={"bi bi-person fs-4"} />
            <img src={props.imageUrl} alt="" />
            <div>
                <div className="fw-semibold">{props.username}</div>
                <div className="text-muted" style={{ fontSize: "0.8rem" }}>{props.subscription}</div>
            </div>
        </div>
    )
}