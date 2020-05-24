import MapComp from "../components/mapComp";

import {object} from "@storybook/addon-knobs"

export default {
  title: "MapComp",
  component: MapComp,
};

export const simple_mapComp = () => {
  let list;
  list = object("markers", [{address: "6543 Del Playa Drive", lat: 39.248892, lng: -119.9494}]);
  return <MapComp list={list} />;
};