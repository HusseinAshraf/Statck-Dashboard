import React from "react";
import Bar from "./Bar";
import Header from "../Header/Header";

const BarChart = () => {
  return (
    <>
      <Header
        title={"Bar Chart"}
        isDashboard={true}
        subTitle={"The minimum wage in Germany, France and Spain (EUR/month)"}
      />
      <Bar />
    </>
  );
};

export default BarChart;
