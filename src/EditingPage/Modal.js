import * as React from "react";
import { Backdrop } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Modal } from "@material-ui/core";
import { Fade, Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { NumberOfCopies, ObjectContext } from "./EditingPage";
import { DemoCarousel } from "./Carousel";

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

export const ModalComponent = (props) => {
  const { objects, dispatch1 } = React.useContext(ObjectContext);
  const { total, dispatch3 } = React.useContext(NumberOfCopies);

  const handleClick = async () => {
    const data = { objects: objects, total: total };
    const requestOptions = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    };
    fetch("http://sickalien:8080/submitDetails", requestOptions).then(
      (response) => response.json()
    );

    window.location.href = "/loading";
  };
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
            <DemoCarousel />
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                marginTop: "-10px",
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={handleClick}
              >
                Create
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
