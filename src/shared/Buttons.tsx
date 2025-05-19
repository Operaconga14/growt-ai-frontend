import { IconButtonProps, NormalButtonProps } from "../props/ButtonProps";

export function NormalButton({ text, className, onClick }: NormalButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export function IconButton({
  icon,
  text,
  className,
  classNameIconText,
  onClick,
}: IconButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      <div className={classNameIconText}>
        <i className={icon}></i>
        <span>{text}</span>
      </div>
    </button>
  );
}