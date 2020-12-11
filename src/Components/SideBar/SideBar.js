import React from "react";
import styles from "./styles.module.scss";

import { Airplay } from "react-feather";

const SideBar = () => {
  const imageUrl =
    "https://cdn2.iconfinder.com/data/icons/avatars-2-7/128/1-512.png";
  return (
    <div id="sideBar" className={styles.sideBar}>
      <div className={styles.sideBarWrapper}>
        <div className={styles.profileWrapper}>
          <img src={imageUrl} alt="" className={styles.profileImage} />
          <div className={styles.profileName}>Stanely Parker</div>
          <div className={styles.profileDesignation}>Admin Head</div>
        </div>
        <div className={styles.contentContainer}>
          <div>
            <label className={styles.label}>Navigation</label>

            <div className={styles.dashBoardContainer}>
              <div className={styles.dashBoardHeader}>
                <div className={styles.displayFlex}>
                  <Airplay size={16} />
                  <span className={styles.dashboardHeading}>Dashboards</span>
                </div>
                <span className={styles.dashBoardCount}> 4</span>
              </div>
              <div className={styles.dashBoard}>Dashboard 1</div>
              <div className={styles.dashBoard}>Dashboard 2</div>
              <div className={styles.dashBoard}>Dashboard 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
