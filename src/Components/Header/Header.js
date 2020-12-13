import React from "react";
import styles from "./styles.module.scss";
import {
  Menu,
  ChevronDown,
  Search,
  Maximize,
  Grid,
  Bell,
  Settings,
} from "react-feather";

const Header = () => {
  const imageUrl =
    "https://cdn2.iconfinder.com/data/icons/avatars-2-7/128/1-512.png";
  const logoImage =
    "https://coderthemes.com/ubold/layouts/assets/images/logo-light.png";
  const flag =
    "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg";
  return (
    <>
      <header className={styles.header}>
        <div className={styles.menuContainer}>
          <img className={styles.logoImage} src={logoImage} alt="" />

          <Menu size={24} className={styles.menu} />
          <div className={styles.dropMenu}>
            Create new <ChevronDown size={13} className={styles.downArraow} />
          </div>
          <div className={styles.dropMenu}>
            Mega menu <ChevronDown size={13} className={styles.downArraow} />
          </div>
        </div>

        <div className={styles.optionContainer}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Search..."
              className={styles.input}
            />
            <Search size={16} className={styles.searchIcon} />
          </div>
          <Maximize size={22} color="#AFB3B7" className={styles.marginRight} />
          <Grid size={22} color="#AFB3B7" className={styles.marginRight} />
          <img src={flag} alt="" className={styles.flag} />
          <Bell size={22} color="#AFB3B7" className={styles.marginRight} />
          <div className={styles.profileContainer}>
            <img className={styles.profileImage} src={imageUrl} alt="" />
            <span className={styles.profileName}>Stanley</span>
            <ChevronDown
              size={13}
              color="#AFB3B7"
              style={{ cursor: "pointer" }}
            />
          </div>
          <Settings size={22} color="#AFB3B7" style={{ cursor: "pointer" }} />
        </div>
      </header>
    </>
  );
};
export default Header;
