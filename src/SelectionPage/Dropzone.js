import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { Progress } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "@material-ui/core";
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
        toast.error("upload fail");
      });
  }, []);

  const uploadFile = () => {
    axios
      .post("http://localhost:8443/uploadToS3")
      .then(function (response) {
        toast.success("success");
      })
      .catch(function (error) {
        toast.info(error);
        toast.error("failure");
      });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png",
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
          <p style={{ zIndex: 2 }}>
            Drag 'n' drop some files here, or click to select files
          </p>
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
        className="form-group"
        style={{ marginTop: "20px", zIndex: 2, width: "30px" }}
      >
        <Progress
          max="100"
          color="success"
          value={loaded}
          style={{ zIndex: 2 }}
        >
          <p style={{ margin: "5px" }}> Math.round(loaded, 2)% </p>
        </Progress>
      </div>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={uploadFile}
        style={{ zIndex: 2, marginTop: "40px" }}
      >
        Upload
      </Button>
    </div>
  );
}
