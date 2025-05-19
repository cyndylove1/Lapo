interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  stroke?: string;
  onClick?: () => void;
}

export default function Button({
  text,
  type,
  className,
  onClick,
}: ButtonProps) {
  return (
    <div className="flex items-center">
      <button
        type={type}
        className={`flex items-center justify-center ${className}`}
        onClick={onClick}
      >
          <div className="satoshi-500 text-white text-[16px] leading-[100%]">
            {text}
          </div>
      </button>
    </div>
  );
}
