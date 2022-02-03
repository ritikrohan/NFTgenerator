import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

export function MyDropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    const formData = new FormData();
    acceptedFiles &&
      acceptedFiles.forEach((file) => {
        formData.append("file", file);
        console.log(formData);
      });

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios
      .post("http://localhost:8443/fetchFiles", formData, config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
    </div>
  );
}
