interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
}

export default function ButtonIcon({
  text,
  type,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center satoshi-500 text-[12px] leading-[18px] bg-[var(--main)] h-[36px] rounded text-white ${className}`}
      onClick={onClick}
      type={type}
    >
      <span className="flex items-center gap-2">
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0001 4.6665V16.3332M4.16675 10.4998H15.8334"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>{text}</span>
      </span>
    </button>
  );
}
