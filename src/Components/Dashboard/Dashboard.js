import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import styles from "./styles.module.scss";
import BarGraph from "./Graph/BarGraph/BarGraph";
import PieChartComponent from "./Graph/PieChart/PieChartComponent";
import LineChartComponent from "./Graph/LineChart/LineChart";
import DataTable from "./DataTable/DataTable";
import { barGraphData, pieChartData } from "./constants";
import Profile from "./Profile/Profile";
import { Minus, X } from "react-feather";

const DashBoard = ({ showSideBar, setShowSideBar }) => {
  const [isPieChartMinimize, setIsPieChartMinimize] = useState(false);
  const [isBarGraph, setIsBarGraph] = useState(false);
  const [isLineChartMinimize, setIsLineChartMinimize] = useState(false);

  return (
    <div className={styles.container}>
      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div
        className={styles.contentContainer}
        style={{ width: !showSideBar ? "100%" : "calc(100% - 300px)" }}
      >
        <div className={styles.heading}>Dashboard</div>
        <div className={styles.row}>
          <div
            id="largeDiv1"
            className={styles.largeDiv}
            style={{ height: isPieChartMinimize ? "30px" : "450px" }}
          >
            <div className={styles.graph}>
              <div className={styles.graphHeading}>
                Lifetime Sales
                <span>
                  <Minus
                    size={16}
                    className={styles.closeIcon}
                    onClick={() => setIsPieChartMinimize(!isPieChartMinimize)}
                  />
                  <X size={16} className={styles.closeIcon} />
                </span>
              </div>
              <div style={{ display: isPieChartMinimize ? "none" : "block" }}>
                <PieChartComponent data={pieChartData} />
              </div>
            </div>
          </div>
          <div
            id="largeDiv2"
            className={styles.largeDiv}
            style={{ height: isBarGraph ? "30px" : "450px" }}
          >
            <div className={styles.graph}>
              <div className={styles.graphHeading}>
                Statistics
                <span>
                  <Minus
                    size={16}
                    className={styles.closeIcon}
                    onClick={() => {
                      setIsBarGraph(!isBarGraph);
                    }}
                  />
                  <X size={16} className={styles.closeIcon} />
                </span>
              </div>
              <div style={{ display: isBarGraph ? "none" : "block" }}>
                <BarGraph data={barGraphData} />
              </div>
            </div>
          </div>
          <div
            id="largeDiv3"
            className={styles.largeDiv}
            style={{ height: isLineChartMinimize ? "30px" : "450px" }}
          >
            <div className={styles.graphHeading}>
              Income Amounts
              <span>
                <Minus
                  size={16}
                  className={styles.closeIcon}
                  onClick={() => setIsLineChartMinimize(!isLineChartMinimize)}
                />
                <X size={16} className={styles.closeIcon} />
              </span>
            </div>
            <div style={{ display: isLineChartMinimize ? "none" : "block" }}>
              <LineChartComponent />
            </div>
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
