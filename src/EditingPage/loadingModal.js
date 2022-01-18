import * as React from "react";
import { Backdrop } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Modal } from "@material-ui/core";
import { Fade, CircularProgress } from "@material-ui/core";
import "./loadingAnimation.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 650,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
  backgroundColor: "#525050d7",
};

export const LoadingModalComponent = (props) => {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.isOpen}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.isOpen}>
          <Box sx={style}>
            <div
              className="typewriter"
              style={{
                maxHeight: "50px",
                color: "#fff",
              }}
            >
              <h2>Files are being processed...</h2>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div class="spinner-box">
                <div class="blue-orbit leo"></div>

                <div class="green-orbit leo"></div>

                <div class="red-orbit leo"></div>

                <div class="white-orbit w1 leo"></div>
                <div class="white-orbit w2 leo"></div>
                <div class="white-orbit w3 leo"></div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
