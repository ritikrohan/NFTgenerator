import { Button } from "@material-ui/core";
import React, { Component } from "react";
import axios from "axios";
import { NavComponent } from "../EditingPage/Navbar";
import { ToastContainer, toast } from "react-toastify";

import "./style.css";

export const Fluidity = () => {
  const [isLoading, setLoading] = React.useState(true);

  const handleClickGenerate = async () => {
    const baseURL = "https://sickalien.store:8443/uploadCloud";
    const response = await axios
      .get(baseURL, {
        params: { uuid: JSON.parse(sessionStorage.uuid) },
      })
      .then(function (response) {
        setLoading(false);
        toast.success("upload success");
      })
      .catch(function (error) {
        toast.info(error);
        toast.error("upload fail");
      });
  };

  const handleClickDownload = () => {
    axios.post("https://sickalien.store:8443/deleteLocalFiles", {
      uuid: JSON.parse(sessionStorage.uuid),
    });
    axios
      .get("https://sickalien.store:8443/download", {
        params: { uuid: JSON.parse(sessionStorage.uuid) },
      })
      .then(function (response) {
        toast.success("Download Success!! :D");
      })
      .catch(function (error) {
        toast.info(error);
        toast.error("Download failed!! :(");
      });

    axios({
      url: `https://nftcodebucket.s3.us-west-1.amazonaws.com/generated/${JSON.parse(
        sessionStorage.uuid
      )}.zip`, //your url
      method: "GET",
      responseType: "blob", // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "YourAwesomeFile.zip"); //or any other extension
      document.body.appendChild(link);
      link.click();

      window.location.href = "/final";
    });
  };

  return (
    <div className="trans">
      <div style={{ maxHeight: "20px", zIndex: 21 }}>
        <NavComponent />
      </div>

      <div
        style={{
          background: "#00000000",
          paddingTop: "50vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="typewriter"
          style={{
            maxWidth: "71vw",
            maxHeight: "8vh",
          }}
        >
          <h2>Patience ... Awesome things on the way !&nbsp; </h2>
        </div>
      </div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          marginTop: "50px",
        }}
      >
        {isLoading ? (
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleClickGenerate}
          >
            Generate Link
          </Button>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleClickDownload}
          >
            Download
          </Button>
        )}
      </div>
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
