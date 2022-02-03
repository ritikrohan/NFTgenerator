import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { Progress } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function MyDropzone() {
  const [loaded, setLoaded] = React.useState(0);
  const onDrop = useCallback((acceptedFiles) => {
    const formData = new FormData();
    acceptedFiles &&
      acceptedFiles.forEach((file) => {
        formData.append("file", file);
        console.log(formData);
      });

    axios
      .post("http://localhost:8443/fetchFiles", formData, {
        onUploadProgress: (ProgressEvent) => {
          setLoaded((ProgressEvent.loaded / ProgressEvent.total) * 100);
        },
      })
      .then(function (response) {
        toast.success("upload success");
        console.log(response);
      })
      .catch(function (error) {
        toast.info("Only png and jpg formats are supported");
        toast.error("upload fail");
        console.log(error);
      });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png",
  });

  return (
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
      <div className="form-group" style={{ marginTop: "20px", zIndex: 2 }}>
        <Progress
          max="100"
          color="success"
          value={loaded}
          style={{ zIndex: 2 }}
        >
          {Math.round(loaded, 2)}%
        </Progress>
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
}
