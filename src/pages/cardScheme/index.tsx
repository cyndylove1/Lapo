import SearchBar from "../../components/searchBar";
import ButtonIcon from "../../components/Buttons/buttonIcon";
import SchemeTable from "../../components/Tables/SchemeTable";
import SchemeModal from "../../components/modals/schemeModal";
import { useState } from "react";

export default function CardScheme() {
  const [isSchemeOpen, setIsSchemeOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between mx-6 pb-2 border-b-[1px] border-(--border)">
        <div>
          <h2 className="satoshi-700 text-[18px] leading-[28px] text-[#101828] pt-4">
            Card Scheme
          </h2>
          <h6 className="satoshi-400 text-[14px] leading-[20px] text-[#475467]">
            Add, view and edit card schemes here.
          </h6>
        </div>
      </div>
      <div className="flex justify-between flex-col md:flex-row items-center mx-6 py-2 border-b-[1px] border-(--border)">
        <div className="w-full">
          <SearchBar
            placeholder="Search by scheme name"
            className="h-[40px] md:w-[320px] w-full rounded-[8px] bg-white border-[1px] border-(--border)"
          />
        </div>

        <div onClick={() => setIsSchemeOpen(true)} className="w-full md:w-[120px] mt-4 md:mt-0">
          <ButtonIcon text="Add Scheme"  className="w-full md:w-[120px]"/>
        </div>
      </div>
      <div className="mt-4 mx-6">
        <SchemeTable />
      </div>
      <SchemeModal
        isSchemeOpen={isSchemeOpen}
        onClose={() => setIsSchemeOpen(false)}
      />
    </>
  );
}
