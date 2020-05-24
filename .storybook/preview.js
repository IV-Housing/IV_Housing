import React from "react";
import { addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import '../styles/utils.module.css'
import '../styles/global.css'
// import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

addDecorator(withA11y);
addDecorator(withKnobs);