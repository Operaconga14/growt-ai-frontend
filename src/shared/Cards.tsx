import { CustomCardProps } from "../props/CardsProps"

export function SimpleCard() {
    return <div>
        <h1>Simple Card</h1>
    </div>
}

export function CustomCard({ className, description, icon, iconStyle, cardBodyClassName, descriptionClassName, titleClassName, style, title }: CustomCardProps) {
    return <div className={`${className} card`} style={style}>
        <div className={`card-body ${cardBodyClassName}`}>
            <i className={icon} style={iconStyle}></i>
            <h3 className={titleClassName}>{title}</h3>
            <small className={descriptionClassName}>{description}</small>
        </div>
    </div >
}

export function ChallengeCard() {
    return <div>
        <h1>Challenge Card</h1>
    </div>
}