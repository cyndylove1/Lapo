import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import type { SwitchProps } from "@mui/material/Switch";

interface ToggleSwitchProps extends SwitchProps {
  checkedColor?: string;
  uncheckedColor?: string;
  darkCheckedColor?: string;
  darkUncheckedColor?: string;
}

export default function ToggleSwitch({
  checkedColor = "#007129",
  uncheckedColor = "#E9E9EA",
  darkCheckedColor = "#2ECA45",
  darkUncheckedColor = "#39393D",
  ...props
}: ToggleSwitchProps) {
  const IOSSwitch = styled((props: SwitchProps) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: checkedColor,
          opacity: 1,
          border: 0,
          ...(theme.palette.mode === "dark" && {
            backgroundColor: darkCheckedColor,
          }),
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: theme.palette.grey[100],
        ...(theme.palette.mode === "dark" && {
          color: theme.palette.grey[600],
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.7,
        ...(theme.palette.mode === "dark" && {
          opacity: 0.3,
        }),
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: uncheckedColor,
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
      ...(theme.palette.mode === "dark" && {
        backgroundColor: darkUncheckedColor,
      }),
    },
  }));

  return (
    <FormControlLabel
      control={<IOSSwitch sx={{ m: 1 }} {...props} />}
      label=""
    />
  );
}
