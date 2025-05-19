interface LabelProps {
  text: string;
  htmlFor?: string;
  className?: string;
  hideIcon?: boolean;
}

export default function Label ({ text, htmlFor, className, hideIcon }:LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-[15px] satoshi-500 leading-[18px] text-(--color) ${className}`}
    >
      {text}
      {!hideIcon && <span className="text-(--color) px-[3px]">*</span>}
    </label>
  );
};


