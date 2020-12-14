import React, { useState } from "react";
import styles from "./styles.module.scss";
import {
  Menu,
  ChevronDown,
  Search,
  Maximize,
  Grid,
  Bell,
  Settings,
  Minimize,
} from "react-feather";

const Header = ({ showSideBar, setShowSideBar }) => {
  const imageUrl =
    "https://cdn2.iconfinder.com/data/icons/avatars-2-7/128/1-512.png";
  const logoImage =
    "https://coderthemes.com/ubold/layouts/assets/images/logo-light.png";
  const flag =
    "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg";

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isOpenSmallMenu, setIsOpenSmallMenu] = useState(false);
  const [isOpenLargeMenu, setIsOpenLargeMenu] = useState(false);

  const openFullScreen = () => {
    const elem = document.getElementById("root");

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  };
  const closeFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.menuContainer}>
          <img className={styles.logoImage} src={logoImage} alt="" />

          <Menu
            size={24}
            className={styles.menu}
            onClick={() => setShowSideBar(!showSideBar)}
          />
          <div className={styles.dropMenu}>
            <div
              className={styles.smallMenu}
              onClick={() => {
                setIsOpenLargeMenu(false);
                setIsOpenSmallMenu(!isOpenSmallMenu);
              }}
            >
              Create new <ChevronDown size={13} className={styles.downArraow} />
            </div>
            {isOpenSmallMenu && (
              <div className={styles.smallMenuDropdown}>
                <div>New Project</div>
                <div>Revenue Report</div>
                <div>Create User</div>
                <div>Create User</div>
                <div>Create User</div>
              </div>
            )}
          </div>
          <div className={styles.dropMenu}>
            <div
              className={styles.smallMenu}
              onClick={() => {
                setIsOpenLargeMenu(!isOpenLargeMenu);
                setIsOpenSmallMenu(false);
              }}
            >
              Mega menu <ChevronDown size={13} className={styles.downArraow} />
            </div>
            {isOpenLargeMenu && (
              <div className={styles.largeMenuDropdown}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
                rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
                quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet
                orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
                mauris sit amet nibh. Donec sodales sagittis magna. Sed
                consequat, leo eget bibendum sodales, augue velit cursus nunc,
              </div>
            )}
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
          {!isFullScreen ? (
            <Maximize
              size={22}
              color="#AFB3B7"
              className={styles.marginRight}
              onClick={() => {
                setIsFullScreen(true);
                openFullScreen();
              }}
            />
          ) : (
            <Minimize
              size={22}
              color="#AFB3B7"
              className={styles.marginRight}
              onClick={() => {
                setIsFullScreen(false);
                closeFullscreen();
              }}
            />
          )}
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
