import React, { useState } from "react";

const DragAndDrop = () => {
  const [files, setFiles] = useState([]);

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles(droppedFiles);
  };

  <i class="las la-check-double"></i>;
  return (
    <div>
      <div id="content">
        <div id="drop-area" onDrop={handleDrop} onDragOver={handleDragOver}>
          <i
            className={
              files.length === 0
                ? "las la-6x la-cloud-upload-alt"
                : "las la-6x la-check-double"
            }
          ></i>
          <p id="filename">
            {files.length === 0
              ? "You can drag it or click the button below."
              : `File Selected: ${files[0].name}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
