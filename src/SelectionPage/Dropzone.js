import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { CircularProgress } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import "react-toastify/dist/ReactToastify.css";

export function MyDropzone() {
  const [loaded, setLoaded] = React.useState(0);
  const onDrop = useCallback((acceptedFiles) => {
    const formData = new FormData();
    const folderPath = [];
    const uuid = JSON.parse(sessionStorage.uuid);
    acceptedFiles &&
      acceptedFiles.forEach((file) => {
        let path = file.path.split("/")[1];
        formData.append(`${uuid}/${path}`, file);

        const fileAdd = { path: file.path, uuid: uuid };
        folderPath.push(fileAdd);
      });

    axios
      .post("http://localhost:8443/uploadPath", folderPath)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        window.location.href = "/error";
        console.log(error);
      });

    axios
      .post("http://localhost:8443/uploadFiles", formData, {
        onUploadProgress: (ProgressEvent) => {
          setLoaded((ProgressEvent.loaded / ProgressEvent.total) * 100);
        },
      })
      .then(function (response) {
        toast.success("upload success");
      })
      .catch(function (error) {
        toast.info(error);
        toast.info("Each File should be within 10Mb limit");
        toast.info("Supported Files: jpg, jpeg, png");
        toast.error("upload fail");
      });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png,image/jpg",
  });

  return (
    <div style={{ zIndex: 2 }}>
      <div style={{ zIndex: 2 }} {...getRootProps()}>
        <input
          style={{ zIndex: 2 }}
          {...getInputProps()}
          directory=""
          webkitdirectory=""
          type="file"
        />
        {isDragActive ? (
          <p style={{ zIndex: 2 }}>Drop the files here ...</p>
        ) : (
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            style={{ zIndex: 2, justifyContent: "center", display: "flex" }}
            size="medium"
          >
            <PhotoCamera />
          </IconButton>
        )}

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
      <div
        style={{
          marginTop: "270px",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CircularProgress variant="determinate" value={loaded} />
      </div>
    </div>
  );
}
