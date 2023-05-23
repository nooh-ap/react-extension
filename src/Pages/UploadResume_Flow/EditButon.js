import React from "react";

const EditButton = (prop) => {
  const clicked = () => {
    console.log(prop.infoKey);
  };

  
  return (
    <div>
      <button id="btn_edit" >
        <i onClick={clicked} className="las la-edit"></i>
      </button>
    </div>
  );
};

export default EditButton;
