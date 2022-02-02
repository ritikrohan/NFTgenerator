import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

export function MyDropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    const totalFiles = [];
    acceptedFiles &&
      acceptedFiles.forEach((file) => {
        console.log(file);
        totalFiles.push(file);
      });
    axios
      .post("http://localhost:8443/fetchFiles", totalFiles)
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
