import { useState } from "react";
import Button from "../../components/Buttons/button";
import FeesTable from "../../components/Tables/feesTable";
import Input from "../../components/input";
import Label from "../../components/label";
import SelectTag from "../../components/selectTag";

export default function CreateProfile() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="px-6">
        <div>
          <h2 className="satoshi-700 text-[18px] leading-[28px] text-[#101828] pt-4">
            Create Profile
          </h2>
          <h6 className="satoshi-400 text-[14px] leading-[20px] text-[#475467]">
            Fill in profile details and add card fee.
          </h6>
        </div>

        <div className="bg-white rounded-[10px] border-[1px] border-[#E2E2E2] md:h-[428px] min-h-screen mt-[15px]">
          <h2 className="satoshi-500 text-[18px] leading-[18px] text-(--color) p-4">
            Profile Details
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-2 grid-cols-1 md:px-6 px-4 gap-[20px]">
              <div>
                <Label text="Card Name" />
                <Input placeholder="Enter card name" hideIcon={true} />

                <Label text="Card Scheme" />
                <SelectTag className="h-[44px] w-full text-[16px] rounded-[8px] border-neutral-200 px-4 text-neutral-500">
                  <option>Verve</option>
                  <option>Master</option>
                </SelectTag>

                <Label text="Description" />
                <Input placeholder="Enter card name" hideIcon={true} />

                <Label text="Branch Blacklist" />
                <SelectTag className="h-[44px] w-full text-[16px] rounded-[8px] border-neutral-200 px-4 text-neutral-500">
                  <option>Head Office</option>
                  <option>Branch A</option>
                </SelectTag>
              </div>

              <div>
                <Label text="Bin Prefix" />
                <Input placeholder="Enter your prefix" hideIcon={true} />

                <Label text="Currency" />
                <SelectTag className="h-[44px] w-full text-[16px] rounded-[8px] border-neutral-200 px-4 text-neutral-500">
                  <option>NGN</option>
                </SelectTag>

                <Label text="Currency" />
                <SelectTag className="h-[44px] w-full text-[16px] rounded-[8px] border-neutral-200 px-4 text-neutral-500">
                  <option>NGN</option>
                </SelectTag>
              </div>
            </div>

            <div>
              <FeesTable
                isProfileOpen={isProfileOpen}
                setIsProfileOpen={setIsProfileOpen}
              />
            </div>

            <Button
              text="Create Profile"
              className="lg:w-[293px] w-full h-[44px] bg-(--main) mb-[3rem] rounded-[4px] mt-6"
            />
          </form>
        </div>
      </div>
    </>
  );
}
