export function QuickAccess() {
  const quickLinks = [
    {
      id: 1,
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="14" cy="14" r="14" fill="#014DAF" />
          <path
            d="M20.6667 12.6668H7.33337M20.6667 13.3335V11.4668C20.6667 10.7201 20.6667 10.3467 20.5214 10.0615C20.3936 9.81063 20.1896 9.60665 19.9387 9.47882C19.6535 9.3335 19.2801 9.3335 18.5334 9.3335H9.46671C8.71997 9.3335 8.3466 9.3335 8.06139 9.47882C7.8105 9.60665 7.60653 9.81063 7.4787 10.0615C7.33337 10.3467 7.33337 10.7201 7.33337 11.4668V16.5335C7.33337 17.2802 7.33337 17.6536 7.4787 17.9388C7.60653 18.1897 7.8105 18.3937 8.06139 18.5215C8.3466 18.6668 8.71997 18.6668 9.46671 18.6668H13.6667M18 20.0002C18 20.0002 20 19.0469 20 17.617V15.9488L18.5416 15.4276C18.1912 15.3021 17.808 15.3021 17.4576 15.4276L16 15.9488V17.617C16 19.0469 18 20.0002 18 20.0002Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Manage a Card",
      arrow: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12L10 8L6 4"
            stroke="#808080"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      icon: (
        <svg
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="14.5" cy="14" r="14" fill="#014DAF" />
          <path
            d="M21.1666 12.6668H7.83325M13.8333 15.3335H10.4999M7.83325 11.4668L7.83325 16.5335C7.83325 17.2802 7.83325 17.6536 7.97858 17.9388C8.10641 18.1897 8.31038 18.3937 8.56126 18.5215C8.84648 18.6668 9.21985 18.6668 9.96659 18.6668L19.0333 18.6668C19.78 18.6668 20.1534 18.6668 20.4386 18.5215C20.6895 18.3937 20.8934 18.1897 21.0213 17.9388C21.1666 17.6536 21.1666 17.2802 21.1666 16.5335V11.4668C21.1666 10.7201 21.1666 10.3467 21.0213 10.0615C20.8934 9.81063 20.6895 9.60665 20.4386 9.47882C20.1534 9.3335 19.78 9.3335 19.0333 9.3335L9.96659 9.3335C9.21985 9.3335 8.84648 9.3335 8.56126 9.47882C8.31038 9.60665 8.10641 9.81063 7.97858 10.0615C7.83325 10.3467 7.83325 10.7201 7.83325 11.4668Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Issue Instant Card",
      arrow: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12L10 8L6 4"
            stroke="#808080"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="14" cy="14" r="14" fill="#014DAF" />
          <path
            d="M7.33325 12.6668H20.6666V11.4668C20.6666 10.7201 20.6666 10.3467 20.5213 10.0615C20.3934 9.81063 20.1895 9.60665 19.9386 9.47882C19.6534 9.3335 19.28 9.3335 18.5333 9.3335H9.46659C8.71985 9.3335 8.34648 9.3335 8.06126 9.47882C7.81038 9.60665 7.60641 9.81063 7.47858 10.0615C7.33325 10.3467 7.33325 10.7201 7.33325 11.4668V16.5335C7.33325 17.2802 7.33325 17.6536 7.47858 17.9388C7.60641 18.1897 7.81038 18.3937 8.06126 18.5215C8.34648 18.6668 8.71985 18.6668 9.46659 18.6668H13.3333M15.6666 20.0002L17.0166 19.7302C17.1343 19.7066 17.1931 19.6949 17.248 19.6733C17.2967 19.6542 17.343 19.6294 17.3859 19.5995C17.4343 19.5658 17.4767 19.5233 17.5616 19.4385L20.3333 16.6668C20.7014 16.2986 20.7014 15.7017 20.3333 15.3335C19.9651 14.9653 19.3681 14.9653 18.9999 15.3335L16.2283 18.1051C16.1434 18.19 16.101 18.2325 16.0672 18.2808C16.0373 18.3237 16.0125 18.37 15.9934 18.4187C15.9719 18.4736 15.9601 18.5325 15.9366 18.6502L15.6666 20.0002Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Issue Personalized Card",
      arrow: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12L10 8L6 4"
            stroke="#808080"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white lg:h-[106px] border-[1px] border-[#E2E2E2] rounded-[10px] mt-4">
      <h3 className="text-(--color) satoshi-500 text-[16px] leading-[18px] p-4">
        Your Quick Access
      </h3>

      <ul className="flex items-center gap-[8px] md:px-4 flex-col lg:flex-row px-2 lg:px-0">
        {quickLinks.map((item, index) => (
          <li key={index} className=" w-full pb-4 lg:pb-0">
            <div className="flex items-center h-[45px] lg:w-[278.5px] w-full bg-(--skyblue) rounded-[4px] gap-2 pb-[10px]">
              <h2 className="px-4">{item.icon}</h2>
              <div className="flex items-center gap-2">
                <div className="text-(--color) satoshi-500 text-[14px] leading-[18px]">
                  {item.title}
                </div>
                {item.arrow}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
