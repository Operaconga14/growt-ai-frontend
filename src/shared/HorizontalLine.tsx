import HorizontalLineProps from "../props/HorizontalLineProps"

export default function HorizontalLine({ className, color, styles }: HorizontalLineProps) {
    return <div>
        <hr style={styles}
            color={color}
            className={className}
        />
    </div>
}