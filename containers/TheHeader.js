import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CBreadcrumbRouter,
  CImg,
} from "@coreui/react";

const TheHeader = () => {
  return (
    <CHeader
      style={{ backgroundColor: "#F1F8FF", position: "static" }}
      className="shadow-none "
    >
    </CHeader>
  );
};

export default TheHeader;
