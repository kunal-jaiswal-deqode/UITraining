import React from "react";
import SideBar from "./SideBar";
import styles from "./styles.module.css";
const DashBoard = () => {
  return (
    <div className={styles.container}>
      <SideBar />

      <div className={styles.contentContainer}>
        <div className={styles.row}>
          <div id="largeDiv1" className={styles.largeDiv}></div>
          <div id="largeDiv2" className={styles.largeDiv}></div>
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
