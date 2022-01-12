import { Card, styled } from "@mui/material";

export const ActivityPage = styled("div")(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
}));

export const NotificationSection = styled(Card)(({ theme }) => ({
  width: "43%",
  backgroundColor: "#fff",
  boxShadow: theme.shadows.shadow3,
  borderRadius: 10,
  margin:'10px 0',
}));

export const GraphSection = styled(Card)(({ theme }) => ({
  width: "53%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding:'10px',

  "& .graph-section": {
    width: "95%",
    height: "48%",
    backgroundColor: "#fff",
    boxShadow: theme.shadows.shadow3,
    borderRadius: 10,
    margin:'0 auto',
  },
}));
