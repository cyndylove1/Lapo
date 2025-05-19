import { useState } from "react";
import Input from "../../components/input";
import InputPassword from "../../components/inputPassword";
import Label from "../../components/label";
import Logo from "../../components/logo";
import Checkbox from "../../components/checkbox";
import Button from "../../components/Buttons/button";
import Cover from "../../components/cover";
import Footer from "../../components/footer";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <>
      <div className=" flex background">
        <div className="">
          <div className="pt-[3rem] px-[30px]">
            <Logo />
          </div>
          <div className="pl-[50px]">
            <h2 className="pt-[3rem] satoshi-500 text-(--color) text-[28px] leading-[30px]">
              Hi, Welcome Back!
            </h2>
            <h5 className="satoshi-400 text-(--color) text-[14px] pt-[10px] leading-[100%] pb-[2rem]">
              Please sign in using your credentials.
            </h5>
            <form action="">
              <div className="mb-[20px]">
                <Label text="Username" hideIcon={true} />
                <Input
                  placeholder="Enter your username"
                  type="text"
                  className="w-[500px]"
                />
              </div>
              <div className="">
                <Label text="Password" hideIcon={true} />
                <InputPassword
                  hideIcon={false}
                  className="w-[500px]"
                  placeholder="Enter your Password"
                  showVisibility={passwordVisible}
                  togglePasswordVisibility={() =>
                    setPasswordVisible(!passwordVisible)
                  }
                />
              </div>
              <h2 className="text-[14px] satoshi-400 pt-[6px] leading-[20px] text-(--color)">
                Forgot Password
              </h2>
              <div className="flex items-center gap-[12px] pt-[1rem]">
                <Checkbox height="20px" width="20px" />
                <h3 className="text-[14px] satoshi-400 leading-[20px] text-[#161616]">
                  Remember me
                </h3>
              </div>
              <Button
                text="Login"
                className="bg-(--main) w-[500px] h-[44px] rounded-[8px] mt-[1rem]"
              />
            </form>
          </div>
          <div className="pt-[9rem] px-[50px]">
            <Footer />
          </div>
        </div>
        <div className="py-[1rem] pl-[50px] pr-[1rem]">
          <Cover />
        </div>
      </div>
    </>
  );
}
