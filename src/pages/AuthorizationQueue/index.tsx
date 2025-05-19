import AuthorizationQueueTable from "../../components/Tables/AuthorizationQueueTable";

export default function AuthorizationQueue() {
    return (
      <>
        <div className="mx-6">
          <div className="border-b-[1px] border-(--border)  pb-4">
            <h2 className="satoshi-700 text-[18px] leading-[28px] text-[#101828] pt-4">
              Authorization Queue
            </h2>
            <h6 className="satoshi-400 text-[14px] leading-[20px] text-[#475467]">
              Shows the different requests for authorized roles.
            </h6>
          </div>
          <AuthorizationQueueTable />
        </div>
      </>
    );
}