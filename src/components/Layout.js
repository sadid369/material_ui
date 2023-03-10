import React from "react";
import { Box, Typography, Drawer } from "@mui/material";
const drawerWidth = 240;
function Layout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant={`permanent`}
        anchor={`left`}
      >
        <Typography variant="h5">Ninja Notes</Typography>
      </Drawer>
      <Box sx={{ bgcolor: "#f9f9f9" }}>{children}</Box>
    </Box>
  );
}

export default Layout;
