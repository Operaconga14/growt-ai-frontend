import type { CardWithIconsProps } from '../props/cardWithIconsProps';
import Icon from './Icon';
export default function CardWithIcons( { styles, texts }: CardWithIconsProps )
{
    return (
        <div className={styles[ 1 ].cardStyle}>
            <div className={styles[ 2 ].cardBodyStyle}>
                <Icon iconStyle={styles[ 0 ].iconStyle} name={texts[ 2 ].iconName} />
                <div className={styles[ 5 ].otherStyle}>
                    <h3 className={styles[ 3 ].titleStyle}>{texts[ 0 ].titleText}</h3>
                    <small className={styles[ 4 ].descriptionStyle}>{texts[ 1 ].descriptionText}</small>
                </div>

            </div>
        </div>
    )
}

// "card border-0 shadow-sm bg-blue-light p-0 text-start"
// "card-body pt-4"
// iconStyle = { 'bg-gradient-primary p-3 rounded text-white fw-bolder'} name = { 'bi bi-house'}
// "mt-4"
// 'fw-bolder fs-5'
// Ai Coaching Assistance
// 'fs-6 text-muted py-0 my-0'
// Description