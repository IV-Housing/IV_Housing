import DataView from "../components/view/dataView";
import '../styles/global.css'
import '../styles/utils.module.css'

import React from "react";

export default {
  title: "DataView",
  component: DataView,
};

export const simple_dataView = () => {
  return <DataView />;
};