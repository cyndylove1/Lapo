import SearchBar from "../../components/searchBar";
import RequestTable from "../../components/Tables/requestTable";

export default function CardRequest() {
  return (
    <>
      <div className="flex items-center justify-between mx-6 pb-2 border-b-[1px] border-(--border)">
        <div>
          <h2 className="satoshi-700 text-[18px] leading-[28px] text-[#101828] pt-4">
            Card Request
          </h2>
          <h6 className="satoshi-400 text-[14px] leading-[20px] text-[#475467]">
            View and attend to card requests here.
          </h6>
        </div>
      </div>
      <div className="flex justify-between items-center mx-6 py-2 border-b-[1px] border-(--border)">
        <SearchBar
          placeholder="Search by branch"
          className="h-[40px] w-[320px] rounded-[8px] bg-white border-[1px] border-(--border)"
        />
      </div>
      <div className="mt-4 mx-6">
        <RequestTable />
      </div>
    </>
  );
}
