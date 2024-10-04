import { Stack, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

type DashboardLayoutPropsType = {
  children: ReactNode;
};
const DashboardLayout: FC<DashboardLayoutPropsType> = ({ children }) => {
  return (
    <div>
      <Typography>Dashboard layout</Typography>
      <Stack>{children}</Stack>
    </div>
  );
};

export default DashboardLayout;
