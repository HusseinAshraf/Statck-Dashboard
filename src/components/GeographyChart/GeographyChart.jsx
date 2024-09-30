import React from 'react';
import Geography from './Geography';
import Header from "../Header/Header";

const GeographyChart = () => {
  return (
    <>
        <Header
        title={"Geography"}
        isDashboard={true}
        subTitle={"Simple Geography Chart"}
      />
      <Geography/>
    </>
  );
}

export default GeographyChart;
