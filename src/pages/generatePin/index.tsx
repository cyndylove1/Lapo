import { useState, type KeyboardEvent, type ChangeEvent } from "react";
import Input from "../../components/input";
import Label from "../../components/label";
import GenerateTable from "../../components/Tables/generateTable";

export default function GeneratePin() {
  const [showTable, setShowTable] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      setShowTable(true);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="px-6">
        <div>
          <h2 className="satoshi-700 text-[18px] leading-[28px] text-[#101828] pt-4">
            Generate/Reissue Pin
          </h2>
          <h6 className="satoshi-400 text-[14px] leading-[20px] text-[#475467]">
            Generate and Reissue Card Pins here.
          </h6>
        </div>
        <form action="">
          <div className="mt-[10px]">
            <Label text="Account Number" />
            <Input
              placeholder="Enter account number"
              className="md:w-[448px] w-full bg-white"
              hideIcon={true}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          </div>
        </form>
        <div className="mt-[20px]">{showTable && <GenerateTable/>}</div>
      </div>
    </>
  );
}
