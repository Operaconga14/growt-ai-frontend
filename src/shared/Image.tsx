import ImageProps from "../props/ImageProps";

export default function Image({ src, altText, className, styles, onClick }: ImageProps) {
  return (
    <>
      <img
        src={src}
        className={className}
        style={styles}
        alt={altText}
        onClick={onClick}
      />
    </>
  );
}

