import { NavLink } from "react-router";
import { RiMenuLine } from "react-icons/ri";
import { sidebarItems } from "../pages/sidebarContent/data";
import SearchBar from "./searchBar";
interface HeaderProps {
  onMenuClick: () => void;
}
export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <>
      <div className="flex justify-between items-center bg-white h-[48px] border-b border-[#DEDEDF] px-6">
        <div
          className="flex text-[30px] text-neutral-950 lg:hidden"
          onClick={onMenuClick}
        >
          <RiMenuLine />
        </div>
        <ul>
          {sidebarItems.map((section) => (
            <div key={section.title} className="">
              <ul>
                {section.items.map((item) => (
                  <li key={item.id}>
                    <NavLink to={item.path} className="text-[#001735]">
                      {({ isActive }: { isActive: boolean }) => (
                        <div className="">
                          <div
                            className={`flex items-center gap-[12px] satoshi-500 ${
                              isActive ? "" : "opacity-0 absolute"
                            }`}
                          >
                            <span
                              style={{
                                stroke: isActive ? "#001735" : "#001735",
                              }}
                            >
                              {item.icon(isActive)}
                            </span>
                            <h2 className="text-[12px]">{item.Label}</h2>
                          </div>
                        </div>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
        <div className="flex justify-between items-center  gap-[20px]">
          <div className="hidden md:flex">
            <SearchBar
              placeholder="Search"
              className="rounded-[98px] h-[32px] w-[214px] border-[1px] border-(--border)"
            />
          </div>

          <span>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.7952 27.4998C18.3828 28.0185 19.1547 28.3332 20.0001 28.3332C20.8454 28.3332 21.6173 28.0185 22.2049 27.4998M25.0001 16.6665C25.0001 15.3404 24.4733 14.0687 23.5356 13.131C22.5979 12.1933 21.3261 11.6665 20.0001 11.6665C18.674 11.6665 17.4022 12.1933 16.4645 13.131C15.5268 14.0687 15.0001 15.3404 15.0001 16.6665C15.0001 19.2417 14.3504 21.0048 13.6248 22.171C13.0127 23.1547 12.7066 23.6466 12.7178 23.7838C12.7303 23.9357 12.7624 23.9937 12.8849 24.0845C12.9954 24.1665 13.4939 24.1665 14.4908 24.1665H25.5093C26.5062 24.1665 27.0047 24.1665 27.1152 24.0845C27.2377 23.9937 27.2699 23.9357 27.2823 23.7838C27.2935 23.6466 26.9875 23.1547 26.3753 22.171C25.6497 21.0048 25.0001 19.2417 25.0001 16.6665Z"
                stroke="#475467"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span className="h-[32px] w-[32px] rounded-[160px] bg-(--gray-100) flex items-center justify-center ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.4001 17.1998C16.4001 16.0834 16.4001 15.5251 16.2623 15.0709C15.9521 14.0482 15.1517 13.2478 14.129 12.9376C13.6748 12.7998 13.1165 12.7998 12.0001 12.7998H8.0001C6.88365 12.7998 6.32542 12.7998 5.87118 12.9376C4.84846 13.2478 4.04813 14.0482 3.73789 15.0709C3.6001 15.5251 3.6001 16.0834 3.6001 17.1998M13.6001 6.3998C13.6001 8.38803 11.9883 9.9998 10.0001 9.9998C8.01187 9.9998 6.4001 8.38803 6.4001 6.3998C6.4001 4.41158 8.01187 2.7998 10.0001 2.7998C11.9883 2.7998 13.6001 4.41158 13.6001 6.3998Z"
                stroke="#475467"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
}
