import { useState } from "react";
import Label from "../../components/label";
import InputPassword from "../../components/inputPassword";
import Button from "../../components/Buttons/button";

export default function Account() {
    const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <>
      <div>
        <div className="border-b-[1px] border-(--border) md:mx-6 pb-4 px-4">
          <h2 className="satoshi-700 text-[18px] leading-[28px] text-[#101828] pt-4 ">
            Account
          </h2>
          <h6 className="satoshi-400 text-[14px] leading-[20px] text-[#475467]">
            Change your password here.
          </h6>
        </div>
        <div className="bg-white rounded-[10px] h-[466px] md:w-[480px] my-6 md:mx-6 p-4">
          <h2 className="satoshi-500 text-[18px] leading-[18px] text-(--color)">
            Change Password
          </h2>
          <form action="">
            <div className="my-4">
              <Label text="Old Password" />
              <InputPassword
                hideIcon={false}
                placeholder="Enter your Old Password"
                showVisibility={passwordVisible}
                togglePasswordVisibility={() =>
                  setPasswordVisible(!passwordVisible)
                }
              />
            </div>
            <div className="my-4">
              <Label text="New Password" />
              <InputPassword
                hideIcon={false}
                placeholder="Enter your New Password"
                showVisibility={passwordVisible}
                togglePasswordVisibility={() =>
                  setPasswordVisible(!passwordVisible)
                }
              />
              <p className="satoshi-400 text-[12px] leading-[20px] text-[#475467]">
                Password required to be at least 8 characters long
              </p>
            </div>
            <div className="my-4">
              <Label text="Confirm Password" />
              <InputPassword
                hideIcon={false}
                placeholder="Enter your Old Password"
                showVisibility={passwordVisible}
                togglePasswordVisibility={() =>
                  setPasswordVisible(!passwordVisible)
                }
              />
              <p className="satoshi-400 text-[12px] leading-[20px] text-[#475467]">
                Passwords must match
              </p>
            </div>
            <Button
              text="Submit"
              className="w-full h-[44px] rounded-[8px] bg-(--main)"
            />
          </form>
        </div>
      </div>
    </>
  );
}
