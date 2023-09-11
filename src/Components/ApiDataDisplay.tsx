// ApiDataDisplay.js
import React from "react";
import DisplayAgeData from "./DisplayAgeData";
import DisplayColourData from "./DisplayColourData";
import { AgeData, TopColourData } from "../Shared/DataTypes";

interface Props {
  data: {
    ages: AgeData[];
    topColours: TopColourData[];
  };
}

function ApiDataDisplay({ data }: Props) {
  return (
    <>
      <DisplayAgeData ageData={data.ages} />
      <DisplayColourData topColourData={data.topColours} />
    </>
  );
}

export default ApiDataDisplay;
