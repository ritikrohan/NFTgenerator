import * as React from "react";
import { Backdrop } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Modal } from "@material-ui/core";
import { Fade, CircularProgress } from "@material-ui/core";

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

export const FinalModalComponent = (props) => {
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
                maxHeight: "30px",
                maxWidth: "70%",
                color: "#fff",
              }}
            >
              <h3> 🎉🎉 Woohoooo !! Check Generated Folder...</h3>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                color: "#fff",
                fontFamily: "monospace",
                marginTop: "20px",
              }}
            >
              Hey Guys,
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#fff",
                fontFamily: "monospace",
                marginTop: "30px",
              }}
            >
              Thanks a lot for using this tool , its been my pleasure serving
              your needs. I do hope this tool was useful for you. Please do take
              a time in supporting me so I can bring more such tools for you
              free of cost. It did take a lot of time to develop this , do
              support this project in any way possible !
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                color: "#fff",
                fontFamily: "monospace",
                marginTop: "30px",
              }}
            >
              Regards, Bitrix
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "monospace",
                marginTop: "30px",
                backgroundColor: "rgb(119 119 119 / 84%)",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <ol>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Links
                </p>
                <div>
                  <a
                    style={{
                      marginTop: "30px",
                      color: "rgb(91 171 255)",
                    }}
                    href="https://patreon.com/bitrix"
                  >
                    👽 Patreon
                  </a>
                </div>

                <div>
                  <a
                    style={{ marginTop: "10px", color: "rgb(91 171 255)" }}
                    href="https://www.buymeacoffee.com/bitrix"
                  >
                    ☕ Buy me a coffee :)
                  </a>
                </div>

                <div>
                  <p style={{ marginTop: "10px", color: "#fff" }}>
                    💸 ETH Address [ERC20] -
                    0x2b2d491559c47406c3d79e0e805f8bfbba699432
                  </p>
                </div>

                <div>
                  <p style={{ marginTop: "10px", color: "#fff" }}>
                    🦍 Metamask Wallet Address -
                    0xB1Ea4256Af8a6B299e80D0168426545B2A4B2696
                  </p>
                </div>
              </ol>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                color: "#fff",
                fontFamily: "monospace",
                marginTop: "30px",
              }}
            >
              <ol>
                <p style={{ marginTop: "5px", color: "#fff" }}>
                  Drop forget to drop me a piece of your collection 😉
                </p>
                <p style={{ marginTop: "10px", color: "#fff" }}>
                  Do tag me as #sickalien in your posts as well , cheers !
                </p>
              </ol>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
