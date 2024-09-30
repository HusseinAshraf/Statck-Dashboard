import React from "react";
import Line from "./Line";
import Header from "../Header/Header";

const LineChart = () => {
  return (
    <>
      <Header
        title={"Line Chart"}
        isDashboard={true}
        subTitle={"Simple Line Chart"}
      />
      <Line />
    </>
  );
};

export default LineChart;
