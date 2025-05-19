interface SearchProps {
  placeholder: string;
  className?: string;
}
export default function SearchBar ({
  placeholder,
  className,
}:SearchProps)  {
  return (
    <>
      <div className="relative">
        <span className="left-3 top-1/2 text-neutral-500 absolute -translate-y-1/2">
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.7188 14L11.8188 11.1M13.3854 7.33333C13.3854 10.2789 10.9976 12.6667 8.05208 12.6667C5.10656 12.6667 2.71875 10.2789 2.71875 7.33333C2.71875 4.38781 5.10656 2 8.05208 2C10.9976 2 13.3854 4.38781 13.3854 7.33333Z"
              stroke="#344054"
              stroke-width="1.63646"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>

        <input
          type="text"
          placeholder={placeholder}
          className={`py-2 pl-10 pr-4 text-[11px] satoshi-400 leading-[17px] text-(--secondary-gray) outline-none ${className}`}
        />
      </div>
    </>
  );
};

