import { styled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import type { RadioProps } from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Label from "../label";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: "#f5f8fa",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: "#ebf1f5",
    ...theme.applyStyles("dark", {
      backgroundColor: "#30404d",
    }),
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background: "rgba(206,217,224,.5)",
    ...theme.applyStyles("dark", {
      background: "rgba(57,75,89,.5)",
    }),
  },
  ...theme.applyStyles("dark", {
    boxShadow: "0 0 0 1px rgb(16 22 26 / 40%)",
    backgroundColor: "#394b59",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))",
  }),
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&::before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

// Inspired by blueprintjs
function BpRadio(props: RadioProps) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

export default function RadioButtons() {
  return (
    <FormControl>
      <RadioGroup
        defaultValue="female"
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
      >
        <div className="mt-[20px]">
          <Label text="Currency" hideIcon={true} className="text-[14px]" />
          <div className="flex">
            <FormControlLabel
              value="NGN"
              control={<BpRadio />}
              label="NGN"
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontSize: "13px",
                  fontFamily: "satoshi, sans-serif",
                  fontWeight: 300,
                  lineHeight: "24px",
                  color: "var(--color)",
                },
              }}
            />
            <FormControlLabel
              value="USD"
              control={<BpRadio />}
              label="USD"
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontSize: "13px",
                  fontFamily: "satoshi, sans-serif",
                  fontWeight: 300,
                  lineHeight: "24px",
                  color: "var(--color)",
                },
              }}
            />
          </div>
        </div>
        <div>
          <Label text="Fee Frequency" hideIcon={true} />
          <div className="flex">
            <FormControlLabel
              value="One Off"
              control={<BpRadio />}
              label="One Off"
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontSize: "13px",
                  fontFamily: "satoshi, sans-serif",
                  fontWeight: 300,
                  lineHeight: "24px",
                  color: "var(--color)",
                },
              }}
            />
            <FormControlLabel
              value="Monthy"
              control={<BpRadio />}
              label="Monthy"
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontSize: "13px",
                  fontFamily: "satoshi, sans-serif",
                  fontWeight: 300,
                  lineHeight: "24px",
                  color: "var(--color)",
                },
              }}
            />
          </div>
        </div>
        <div>
          <Label text="Fee Impact" hideIcon={true} />
          <div className="flex">
            <FormControlLabel
              value="Issuance"
              control={<BpRadio />}
              label="Issuance"
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontSize: "13px",
                  fontFamily: "satoshi, sans-serif",
                  fontWeight: 300,
                  lineHeight: "24px",
                  color: "var(--color)",
                },
              }}
            />
            <FormControlLabel
              value="Pin Reissue"
              control={<BpRadio />}
              label="Pin Reissue"
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontSize: "13px",
                  fontFamily: "satoshi, sans-serif",
                  fontWeight: 300,
                  lineHeight: "24px",
                  color: "var(--color)",
                },
              }}
            />
          </div>
        </div>
        <div>
          <Label text="Account Pad" hideIcon={true} />
          <div className="flex">
            <FormControlLabel
              value="None"
              control={<BpRadio />}
              label="None"
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontSize: "13px",
                  fontFamily: "satoshi, sans-serif",
                  fontWeight: 300,
                  lineHeight: "24px",
                  color: "var(--color)",
                },
              }}
            />
            <FormControlLabel
              value="Branch Code Prefix"
              control={<BpRadio />}
              label="Branch Code Prefix"
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontSize: "13px",
                  fontFamily: "satoshi, sans-serif",
                  fontWeight: 300,
                  lineHeight: "24px",
                  color: "var(--color)",
                },
              }}
            />
            <FormControlLabel
              value="Branch Code Suffix"
              control={<BpRadio />}
              label="Branch Code Suffix"
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontSize: "13px",
                  fontFamily: "satoshi, sans-serif",
                  fontWeight: 300,
                  lineHeight: "24px",
                  color: "var(--color)",
                },
              }}
            />
          </div>
        </div>
      </RadioGroup>
    </FormControl>
  );
}
