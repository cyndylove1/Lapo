import AuthorizationTable from "../../components/Tables/authorizationList";

export default function AuthorizationList() {
  return (
    <>
      <div className="mx-6">
        <div className="border-b-[1px] border-(--border)  pb-4">
          <h2 className="satoshi-700 text-[18px] leading-[28px] text-[#101828] pt-4">
            Authorization List
          </h2>
          <h6 className="satoshi-400 text-[14px] leading-[20px] text-[#475467]">
            Shows list of all users with authorized roles.
          </h6>
        </div>
        <AuthorizationTable />
      </div>
    </>
  );
}
