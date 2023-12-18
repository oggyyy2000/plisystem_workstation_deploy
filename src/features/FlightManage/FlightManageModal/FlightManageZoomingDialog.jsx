import React from "react";

import Dialog from "@mui/material/Dialog";

import "../css/FlightManageZoomingDialog.css";

const FlightManageZoomingDialog = ({ info, openZoomingImg, setOpenZoomingImg }) => {
  return (
    <>
      <Dialog
        open={openZoomingImg === info ? true : false}
        onClose={() => setOpenZoomingImg(false)}
        sx={{
          "& .MuiDialog-container": {
            justifyContent: "flex-start",
            alignItems: "flex-start",
          },
        }}
        PaperProps={{
          sx: {
            height: "681px",
            width: "1535px",
            maxWidth: "1535px",
          },
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <img
          src={info}
          srcSet={info}
          alt={info}
          loading="lazy"
          width={"100%"}
          height={"100%"}
        />
      </Dialog>
    </>
  );
};

export default FlightManageZoomingDialog;
