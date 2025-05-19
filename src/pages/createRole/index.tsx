import Button from "../../components/Buttons/button";
import CreateTable from "../../components/Tables/createTable";
import Input from "../../components/input";
import Label from "../../components/label";

export default function CreateRole() {
  return (
    <>
      <div className="mx-6 pt-4">
        <div>
          <h2 className="satoshi-700 text-[18px] leading-[28px] text-[#101828]">
            Create Role
          </h2>
          <h6 className="satoshi-400 text-[14px] leading-[20px] text-[#475467]">
            Set role name, select privileges and permissions.
          </h6>
        </div>
        <div className="mt-4">
          <Label text="Role name" />
          <Input
            placeholder="Enter role name"
            hideIcon={true}
            className="bg-white md:w-[448px] w-full"
          />
        </div>
        <div className="mt-4">
          <CreateTable />
        </div>
        <Button
          text="Create Role"
          className="md:w-[293px] w-full h-[44px] bg-(--main) rounded-[4px] mt-4"
        />
      </div>
    </>
  );
}
