import { IconProps } from "../props/IconProps";

export default function Icon({ className, onClick }: IconProps) {
  return (
    <div>
      <i className={`${className}`} onClick={onClick}></i>
    </div>
  );
}

