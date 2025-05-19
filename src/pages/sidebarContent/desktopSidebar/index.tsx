import { NavLink } from "react-router";
import { sidebarItems } from "../data";
import Logo from "../../../components/logo";
import Icon from "../../../components/icon";


export default function DesktopSidebar() {
  return (
    <>
      <div className="h-full flex-col w-[230px] hidden lg:flex border-r-[1px] border-(--border) bg-white transition-all duration-300 lg:flex">
        {/* Logo */}
        <div className="pt-6">
          <Logo />
        </div>

        {/* Navigation Items */}
        <aside className="text-white">
          {sidebarItems.map((section) => (
            <div key={section.title} className="mb-4">
              <h2 className="py-[10px] text-[10px] leading-[18px] text-[#7E8B9C] px-8">
                {section.title}
              </h2>
              <ul>
                {section.items.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }: { isActive: boolean }) =>
                        `${isActive ? "text-(--main)" : "text-[#00000080]"}`
                      }
                    >
                      {({ isActive }: { isActive: boolean }) => (
                        <div className="relative flex items-center w-full mt-2">
                          {/* Icon & Label */}
                          <div
                            className={`flex items-center gap-[12px] satoshi-500 leading-[8px] rounded-[8px] mx-[11px] px-4 w-full h-[38px] ${
                              isActive
                                ? "bg-[#f6f6f6]  border-[0.6px] border-[#E2E2E2]"
                                : "text-[#00000080]"
                            }`}
                          >
                            <span className="">{item.icon(isActive)}</span>
                            <h2 className="text-[12px] ">{item.Label}</h2>
                          </div>
                        </div>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex items-center gap-[12px] px-6 pt-[10rem]">
            <span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.33337 2L6.89167 2.1559C5.17249 2.76267 4.3129 3.06605 3.82314 3.75828C3.33337 4.45051 3.33337 5.36206 3.33337 7.18518V8.81482C3.33337 10.6379 3.33337 11.5495 3.82314 12.2417C4.3129 12.934 5.17249 13.2373 6.89167 13.8441L7.33337 14"
                  stroke="#121212"
                  stroke-linecap="round"
                />
                <path
                  d="M14 8.00016L7.33337 8.00016M14 8.00016C14 7.53334 12.6705 6.66118 12.3334 6.3335M14 8.00016C14 8.46698 12.6705 9.33914 12.3334 9.66683"
                  stroke="#121212"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h2 className="text-(--color) satoshi-500 text-[12px] leading-[18px]">
              Logout
            </h2>
          </div>
          <div className="px-6 pt-[3rem] pb-[1rem]">
            <h2 className="text-[#808080] satoshi-500 text-[9px] leading-[18px]">
              POWERED BY
            </h2>
            <div>
              <Icon />
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
