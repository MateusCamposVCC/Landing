import React, { Suspense } from "react";
import { CContainer, CFade } from "@coreui/react";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const TheContent = () => {
  return (
    <main className="c-main p-0">
      <CContainer
        style={{ backgroundColor: "#F1F8FF" }}
        className="px-0 h-100"
        fluid
      >
      </CContainer>
    </main>
  );
};

export default React.memo(TheContent);