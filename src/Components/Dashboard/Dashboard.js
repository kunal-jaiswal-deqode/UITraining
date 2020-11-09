import React from "react";
import SideBar from "./SideBar";
import styles from "./styles.module.css";
import BarGraph from "./Graph/BarGraph/BarGraph";
import PieChartComponent from "./Graph/PieChart/PieChartComponent";
import { barGraphData, pieChartData } from "./constants";

const DashBoard = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.contentContainer}>
        <div className={styles.heading}>Dashboard</div>
        <div className={styles.row}>
          <div id="largeDiv1" className={styles.largeDiv}>
            <div className={styles.graph}>
              <PieChartComponent data={pieChartData} />
            </div>
          </div>
          <div id="largeDiv2" className={styles.largeDiv}>
            <div className={styles.graph}>
              <BarGraph data={barGraphData} />
            </div>
          </div>
          <div id="largeDiv3" className={styles.largeDiv}></div>
        </div>
        <div className={styles.row}>
          <div id="smallDiv1" className={styles.smallDiv}></div>
          <div id="smallDiv2" className={styles.smallDiv}></div>
          <div id="smallDiv3" className={styles.smallDiv}></div>
          <div id="smallDiv4" className={styles.smallDiv}></div>
        </div>
        <div className={styles.row}>
          <div id="largestDiv1" className={styles.largestDiv}></div>
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
