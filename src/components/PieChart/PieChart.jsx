import React from "react";
import Pie from "./pie";
import Header from "../Header/Header";

const PieChart = () => {
  return (
    <>
      <Header
        title={"Pie Chart"}
        isDashboard={true}
        subTitle={"Simple Pie Chart"}
      />
      <Pie />
    </>
  );
};

export default PieChart;
