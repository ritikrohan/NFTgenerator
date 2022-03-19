import * as React from "react";

import { Button, Fade, TextField } from "@material-ui/core";
import { NumberOfCopies, ObjectContext, TreeContext } from "./EditingPage";
import { ToastContainer, toast } from "react-toastify";

import { Backdrop } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { DemoCarousel } from "./Carousel";
import { Modal } from "@material-ui/core";
import axios from "axios";

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
  const { objects } = React.useContext(ObjectContext);
  const { total } = React.useContext(NumberOfCopies);
  const { fileData } = React.useContext(TreeContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [URL, setURL] = React.useState("");
  const [next, setNext] = React.useState(false);
  const [code, setCode] = React.useState("");

  const handleClick = async () => {
    const data = {
      objects: objects,
      total: total,
      uuid: JSON.parse(sessionStorage.uuid),
      canvasHeight: props.canvasHeight,
      canvasWidth: props.canvasWidth,
      folderTree: fileData,
      name: name,
      description: description,
      URL: URL,
    };
    props.openLoadingModal();
    axios
      .post("http://localhost:8443/submitDetails", data)
      .then(function (response) {
        window.location.href = "/loading";
        console.log(response);
      })
      .catch(function (error) {
        window.location.href = "/error";
        console.log(error);
      });
  };

  const handleFormSubmit = async () => {
    const data = {
      hash: code,
      totalCopies: total,
      name: name,
    };
    const response = await axios
      .post("https://sickalien.store/validate", data)
      .then(function (res) {
        setNext(true);
        toast.success("Secret Code Validated");
      })
      .catch(function (error) {
        toast.info(error);
        toast.error("Try Again");
      });
  };

  const handleModalClose = () => {
    setNext(false);
    props.handleClose();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.isOpen}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.isOpen}>
          <Box sx={style}>
            {!next && (
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.336)",
                  padding: "10px",
                  borderRadius: "20px",
                }}
              >
                <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    fontWeight: "bold",
                    fontSize: "20px",
                    fontFamily: "monospace",
                  }}
                >
                  REVIEW
                </div>
                <div
                  style={{
                    justifyContent: "flex-start",
                    display: "flex",
                    fontSize: "20px",
                    fontWeight: 500,
                    fontFamily: "monospace",
                    marginTop: "30px",
                    color: "#000",
                    marginLeft: "1%",
                  }}
                >
                  NFT Project name :
                </div>
                <TextField
                  size="medium"
                  variant="standard"
                  inputProps={{ style: { textAlign: "center" } }}
                  placeholder="name"
                  onBlur={(event) => {
                    setName(event.target.value);
                  }}
                  style={{
                    justifyContent: "flex-start",
                    display: "flex",
                    width: "500px",
                    marginLeft: "10px",
                    borderRadius: "10px",
                  }}
                />
                <div
                  style={{
                    justifyContent: "flex-start",
                    display: "flex",
                    fontSize: "20px",
                    fontWeight: 500,
                    fontFamily: "monospace",
                    marginTop: "30px",
                    color: "#000",
                    marginLeft: "1%",
                  }}
                >
                  External Link (Website):
                </div>
                <TextField
                  size="medium"
                  variant="standard"
                  inputProps={{ style: { textAlign: "center" } }}
                  placeholder="URL"
                  onBlur={(event) => {
                    setURL(event.target.value);
                  }}
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    width: "500px",
                    marginLeft: "10px",
                    borderRadius: "10px",
                  }}
                />
                <div
                  style={{
                    justifyContent: "flex-start",
                    display: "flex",
                    fontSize: "20px",
                    fontWeight: 500,
                    fontFamily: "monospace",
                    marginTop: "30px",
                    color: "#000",
                    marginLeft: "1%",
                  }}
                >
                  Description :
                </div>
                <TextField
                  size="small"
                  variant="outlined"
                  inputProps={{ style: { textAlign: "center" } }}
                  placeholder="description"
                  onBlur={(event) => {
                    setDescription(event.target.value);
                  }}
                  multiline={true}
                  style={{
                    justifyContent: "flex-start",
                    display: "flex",
                    width: "600px",
                    marginLeft: "10px",
                    borderRadius: "10px",
                  }}
                />
                <div
                  style={{
                    justifyContent: "flex-start",
                    display: "flex",
                    fontSize: "20px",
                    fontWeight: 500,
                    fontFamily: "monospace",
                    marginTop: "30px",
                    color: "#000",
                    marginLeft: "1%",
                  }}
                >
                  <p>Get your Secret Key ={">"}&nbsp;</p>
                  <a
                    href="https://sickalien.store"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Click Here
                  </a>
                </div>
                <div
                  style={{
                    maxHeight: "50px",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "flex-start",
                    marginTop: "20px",
                  }}
                >
                  <TextField
                    size="small"
                    variant="outlined"
                    inputProps={{ style: { textAlign: "center" } }}
                    placeholder="Secret Code"
                    multiline={true}
                    onBlur={(event) => {
                      setCode(event.target.value);
                    }}
                    style={{
                      justifyContent: "flex-start",
                      display: "flex",
                      width: "600px",
                      marginLeft: "10px",
                      borderRadius: "10px",
                      backgroundColor: "#fff",
                    }}
                  />
                </div>
                <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    marginTop: "30px",
                  }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={handleFormSubmit}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}

            {next && (
              <div>
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
              </div>
            )}
          </Box>
        </Fade>
      </Modal>
      <div className="form-group">
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};
