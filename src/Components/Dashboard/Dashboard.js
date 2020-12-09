import React from "react";
import SideBar from "./SideBar";
import styles from "./styles.module.css";
import BarGraph from "./Graph/BarGraph/BarGraph";
import PieChartComponent from "./Graph/PieChart/PieChartComponent";
import LineChartComponent from "./Graph/LineChart/LineChart";
import DataTable from "./DataTable/DataTable";
import { barGraphData, pieChartData } from "./constants";
import Profile from "./Profile/Profile";
import cx from "classnames";

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
          <div id="largeDiv3" className={styles.largeDiv}>
            <LineChartComponent />
          </div>
        </div>
        <div className={styles.row}>
          <div id="smallDiv1" className={styles.smallDiv}>
            <Profile
              name="Thelma Fridley"
              designation="Admin User"
              isActive={false}
            />
          </div>
          <div id="smallDiv2" className={styles.smallDiv}>
            <Profile
              name="Chandler Hervieux"
              designation="Manager"
              isActive={false}
            />
          </div>
          <div id="smallDiv3" className={styles.smallDiv}>
            <Profile
              name="Percy Demers"
              designation="Director"
              isActive={false}
            />
          </div>
          <div id="smallDiv4" className={styles.smallDiv}>
            <Profile
              name="Antoine Masson"
              designation="Premium User"
              isActive={true}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div id="largestDiv1" className={styles.largestDiv}>
            <DataTable />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.footerContainer}>
            <span>2015 - 2020 © UBold theme by Coderthemes</span>
            <span>
              <span className={styles.footerContent}>About us</span>
              <span className={styles.footerContent}>Help</span>
              <span className={styles.footerContent}>Support</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
