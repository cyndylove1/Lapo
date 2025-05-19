import SearchBar from "../../components/searchBar";
import RoleTable from "../../components/Tables/roleTable";
import ButtonIcon from "../../components/Buttons/buttonIcon";
import { Link } from "react-router-dom";

export default function Roles() {
  return (
    <>
      <div className="flex items-center justify-between mx-6 pb-2 border-b-[1px] border-(--border)">
        <div>
          <h2 className="satoshi-700 text-[18px] leading-[28px] text-[#101828] pt-4">
            Roles
          </h2>
          <h6 className="satoshi-400 text-[14px] leading-[20px] text-[#475467]">
            Manage your roles, create roles, view roles and edit roles. Select
            privileges and set account permissions here.
          </h6>
        </div>
      </div>
      <div className="flex justify-between flex-col md:flex-row items-center mx-4 md:mx-6 py-2 border-b-[1px] border-(--border)">
        <div className="w-full">
          <SearchBar
            placeholder="Search roles"
            className="h-[40px] md:w-[320px] w-full rounded-[8px] bg-white border-[1px] border-(--border)"
          />
        </div>

        <div className="w-full md:w-[120px] mt-4 md:mt-0">
          <Link to="/roles/create">
            <ButtonIcon text="Create Role" className="w-full md:w-[120px]" />
          </Link>
        </div>
      </div>
      <div className="mt-4 mx-6">
        <RoleTable />
      </div>
    </>
  );
}
