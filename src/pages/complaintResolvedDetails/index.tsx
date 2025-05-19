import Input from "../../components/input";
import Label from "../../components/label";

export default function ComplaintResolvedDetails() {
  return (
    <>
      <div>
        <div className="flex items-center justify-between mx-6 pb-2 border-b-[1px] border-(--border)">
          <div>
            <h2 className="satoshi-700 text-[18px] leading-[28px] text-[#101828] pt-4">
              Complaints: Resolve
            </h2>
            <h6 className="satoshi-400 text-[14px] leading-[20px] text-[#475467]">
              View details of treated complaints and resolve pending ones here.
            </h6>
          </div>
        </div>
        <div className="bg-white border-[1px] border-[#E2E2E2] h-[714px] rounded-[10px] mx-6 mt-6 p-4">
          <h2 className="satoshi-500 text-[18px] pb-[20px] leading-[18px] text-(--color)">
            Complaint Details
          </h2>
          <form action="">
            <div className="grid grid-cols-2 gap-[20px]">
              <div>
                <div className="my-4">
                  <Label text="Complaint Category" hideIcon={true} />
                  <Input
                    placeholder="Complaint Category"
                    className="bg-[#f5f5f7]"
                    hideIcon={true}
                  />
                </div>
                <div className="my-4">
                  <Label text="Account Number" hideIcon={true} />
                  <Input
                    placeholder="Account Number"
                    className="bg-[#f5f5f7]"
                    hideIcon={true}
                  />
                </div>
              </div>
              <div>
                <div className="my-4">
                  <Label text="Branch" hideIcon={true} />
                  <Input
                    placeholder="Branch"
                    className="bg-[#f5f5f7]"
                    hideIcon={true}
                  />
                </div>
                <div className="my-4">
                  <Label text="Customer Name" hideIcon={true} />
                  <Input
                    placeholder="Customer Name"
                    className="bg-[#f5f5f7]"
                    hideIcon={true}
                  />
                </div>
              </div>
            </div>
            <div className="my-4">
              <Label text="Complaint Details" hideIcon={true} />
              <textarea
                rows={6}
                className="h-[100px] mt-[5px] p-4 w-full bg-[#f5f5f7] rounded-[8px]"
                placeholder="Complaint Details....."
              ></textarea>
            </div>

            <div className="grid grid-cols-2">
              <div>
                <div className="my-4">
                  <Label text="Submission Date" hideIcon={true} />
                  <h2>11/14/2024 10:27:43</h2>
                </div>
                <div className="my-4">
                  <Label text="Resolved By" hideIcon={true} />
                  <h2>Manager</h2>
                </div>
                <div className="my-4">
                  <Label text="Resolution Date" hideIcon={true} />
                  <h2>11/14/2024 10:27:43</h2>
                </div>
              </div>
              <div>
                <div className="my-2">
                  <Label text="Status" hideIcon={true} />
                  <h2 className="border-[1px] w-[100px] flex items-center justify-center border-[#FEDF89] bg-[#FFFAEB] h-[30px] rounded-[16px] text-[#B54708] satoshi-500 text-[16px] leading-[18px]">
                    Pending
                  </h2>
                </div>
                <div className="my-4">
                  <Label text="Attachment" hideIcon={true} />
                  <h2>None</h2>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
