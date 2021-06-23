import React from "react";
import { CFooter } from "@coreui/react";


const TheFooter = () => {
  return (
    <CFooter
      style={{ backgroundColor: "#F1F8FF" }}
      className=" text-dark"
      fixed={false}
    >
      
    </CFooter>
  );
};

export default React.memo(TheFooter);
