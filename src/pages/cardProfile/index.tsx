import SearchBar from "../../components/searchBar";
import ButtonIcon from "../../components/Buttons/buttonIcon";
import ProfileTable from "../../components/Tables/profileTable";
import { Link } from "react-router-dom";

export default function CardProfile() {
  return (
    <>
      <div className="flex items-center justify-between mx-6 pb-2 border-b-[1px] border-(--border)">
        <div>
          <h2 className="satoshi-700 text-[18px] leading-[28px] text-[#101828] pt-4">
            Card Profile
          </h2>
          <h6 className="satoshi-400 text-[14px] leading-[20px] text-[#475467]">
            Create, view and edit card profiles here.
          </h6>
        </div>
      </div>
      <div className="flex justify-between items-center flex-col md:flex-row md:mx-6 mx-4 py-2 border-b-[1px] border-(--border)">
        <div className="w-full">
          <SearchBar
            placeholder="Search by card name"
            className="h-[40px] md:w-[320px] w-full rounded-[8px] bg-white border-[1px] border-(--border)"
          />
        </div>

        <div className="w-full md:w-[120px] mt-4 md:mt-0">
          <Link to="/profile/create-profile">
            <ButtonIcon text="Add Profile" className="w-full md:w-[120px]" />
          </Link>
        </div>
      </div>
      <div className="mt-4 mx-6">
        <ProfileTable />
      </div>
    </>
  );
}
