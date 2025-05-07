export default function Footer()
{
    const fullYear = new Date().getFullYear()
    return (
        <div className="m-0 p-0 bg-transparent">
            <p className="small text-muted">&copy; {fullYear} Growth AI</p>
        </div>
    )
}