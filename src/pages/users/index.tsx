import SearchBar from "../../components/searchBar";
import ButtonIcon from "../../components/Buttons/buttonIcon";
import UserTable from "../../components/Tables/userTable";
import UserModal from "../../components/modals/userModal";
import { useState } from "react";

export default function Users() {
  const [isUserOpen, setIsUserOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between mx-6 pb-2 border-b-[1px] border-(--border)">
        <div>
          <h2 className="satoshi-700 text-[18px] leading-[28px] text-[#101828] pt-4">
            Users
          </h2>
          <h6 className="satoshi-400 text-[14px] leading-[20px] text-[#475467]">
            Manage your users, create users, view and edit users. Assign roles
            to users here.
          </h6>
        </div>
      </div>
      <div className="flex justify-between items-center flex-col md:flex-row mx-6 py-2 border-b-[1px] border-(--border)">
        <div className="w-full">
          <SearchBar
            placeholder="Enter your username"
            className="h-[40px] md:w-[320px] w-full rounded-[8px] bg-white border-[1px] border-(--border)"
          />
        </div>
        <div className="w-full md:w-[120px] mt-4 md:mt-0">
          <ButtonIcon text="Create User" onClick={() => setIsUserOpen(true)} className="w-full lg:w-[120px]" />
        </div>
      </div>
      <div className="mt-4 mx-6">
        <UserTable />
      </div>
      <UserModal isUserOpen={isUserOpen} onClose={() => setIsUserOpen(false)} />
    </>
  );
}
