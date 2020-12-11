import React from "react";
import styles from "./styles.module.scss";

import {
  Airplay,
  Calendar,
  MessageSquare,
  ShoppingCart,
  Users,
  Mail,
  Rss,
  Activity,
  Briefcase,
  Clipboard,
  Book,
  Aperture,
  FolderPlus,
  FileText,
  Package,
  Layout,
  Pocket,
  Layers,
  Gift,
  Cpu,
  Bookmark,
  Grid,
  BarChart2,
  Map,
  Share2,
  ChevronRight,
} from "react-feather";

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

          <div className={styles.optionWrapper}>
            <label className={styles.label}>Apps</label>

            <div className={styles.dashBoardContainer}>
              <div className={styles.optionContainer}>
                <div className={styles.displayFlex}>
                  <Calendar size={16} />
                  <span className={styles.dashboardHeading}>Calendar</span>
                </div>
              </div>
            </div>

            <div className={styles.dashBoardContainer}>
              <div className={styles.optionContainer}>
                <div className={styles.displayFlex}>
                  <MessageSquare size={16} />
                  <span className={styles.dashboardHeading}>Chat</span>
                </div>
              </div>
            </div>

            <div className={styles.dashBoardContainer}>
              <div className={styles.optionContainer}>
                <div className={styles.displayFlex}>
                  <ShoppingCart size={16} />
                  <span className={styles.dashboardHeading}>E-Commerce</span>
                </div>
                <ChevronRight size={15} className={styles.arrowIcon} />
              </div>
            </div>

            <div className={styles.dashBoardContainer}>
              <div className={styles.optionContainer}>
                <div className={styles.displayFlex}>
                  <Users size={16} />
                  <span className={styles.dashboardHeading}>CRM</span>
                </div>
                <ChevronRight size={15} className={styles.arrowIcon} />
              </div>
            </div>

            <div className={styles.dashBoardContainer}>
              <div className={styles.optionContainer}>
                <div className={styles.displayFlex}>
                  <Mail size={16} />
                  <span className={styles.dashboardHeading}>E-mail</span>
                </div>
                <ChevronRight size={15} className={styles.arrowIcon} />
              </div>
            </div>

            <div className={styles.dashBoardContainer}>
              <div className={styles.optionContainer}>
                <div className={styles.displayFlex}>
                  <Rss size={16} />
                  <span className={styles.dashboardHeading}>Social feed</span>
                </div>
                <span className={styles.hot1}> Hot</span>
              </div>
            </div>

            <div className={styles.dashBoardContainer}>
              <div className={styles.optionContainer}>
                <div className={styles.displayFlex}>
                  <Activity size={16} />
                  <span className={styles.dashboardHeading}>Companies</span>
                </div>
              </div>
            </div>

            <div className={styles.dashBoardContainer}>
              <div className={styles.optionContainer}>
                <div className={styles.displayFlex}>
                  <Briefcase size={16} />
                  <span className={styles.dashboardHeading}>Projects</span>
                </div>
                <ChevronRight size={15} className={styles.arrowIcon} />
              </div>
            </div>

            <div className={styles.dashBoardContainer}>
              <div className={styles.optionContainer}>
                <div className={styles.displayFlex}>
                  <Clipboard size={16} />
                  <span className={styles.dashboardHeading}>Tasks</span>
                </div>
                <ChevronRight size={15} className={styles.arrowIcon} />
              </div>
            </div>

            <div className={styles.dashBoardContainer}>
              <div className={styles.optionContainer}>
                <div className={styles.displayFlex}>
                  <Book size={16} />
                  <span className={styles.dashboardHeading}>Contacts</span>
                </div>
                <ChevronRight size={15} className={styles.arrowIcon} />
              </div>
            </div>

            <div className={styles.dashBoardContainer}>
              <div className={styles.optionContainer}>
                <div className={styles.displayFlex}>
                  <Aperture size={16} />
                  <span className={styles.dashboardHeading}>Tickets</span>
                </div>
                <ChevronRight size={15} className={styles.arrowIcon} />
              </div>
            </div>

            <div className={styles.dashBoardContainer}>
              <div className={styles.optionContainer}>
                <div className={styles.displayFlex}>
                  <FolderPlus size={16} />
                  <span className={styles.dashboardHeading}>File Manager</span>
                </div>
              </div>
            </div>

            <div className={styles.optionWrapper}>
              <label className={styles.label}>Custom</label>

              <div className={styles.dashBoardContainer}>
                <div className={styles.optionContainer}>
                  <div className={styles.displayFlex}>
                    <FileText size={16} />
                    <span className={styles.dashboardHeading}>Auth Pages</span>
                  </div>
                  <ChevronRight size={15} className={styles.arrowIcon} />
                </div>
              </div>

              <div className={styles.dashBoardContainer}>
                <div className={styles.optionContainer}>
                  <div className={styles.displayFlex}>
                    <Package size={16} />
                    <span className={styles.dashboardHeading}>Extra Pages</span>
                  </div>
                  <ChevronRight size={15} className={styles.arrowIcon} />
                </div>
              </div>

              <div className={styles.dashBoardContainer}>
                <div className={styles.optionContainer}>
                  <div className={styles.displayFlex}>
                    <Layout size={16} />
                    <span className={styles.dashboardHeading}>Layouts</span>
                  </div>
                  <span className={styles.new}> New</span>
                </div>
              </div>
            </div>

            <div className={styles.optionWrapper}>
              <label className={styles.label}>Components</label>

              <div className={styles.dashBoardContainer}>
                <div className={styles.optionContainer}>
                  <div className={styles.displayFlex}>
                    <Pocket size={16} />
                    <span className={styles.dashboardHeading}>Base UI</span>
                  </div>
                  <ChevronRight size={15} className={styles.arrowIcon} />
                </div>
              </div>

              <div className={styles.dashBoardContainer}>
                <div className={styles.optionContainer}>
                  <div className={styles.displayFlex}>
                    <Layers size={16} />
                    <span className={styles.dashboardHeading}>Extended UI</span>
                  </div>
                  <span className={styles.hot2}> Hot</span>
                </div>
              </div>

              <div className={styles.dashBoardContainer}>
                <div className={styles.optionContainer}>
                  <div className={styles.displayFlex}>
                    <Gift size={16} />
                    <span className={styles.dashboardHeading}>Widgets</span>
                  </div>
                </div>
              </div>

              <div className={styles.dashBoardContainer}>
                <div className={styles.optionContainer}>
                  <div className={styles.displayFlex}>
                    <Cpu size={16} />
                    <span className={styles.dashboardHeading}>Icons</span>
                  </div>
                  <ChevronRight size={15} className={styles.arrowIcon} />
                </div>
              </div>

              <div className={styles.dashBoardContainer}>
                <div className={styles.optionContainer}>
                  <div className={styles.displayFlex}>
                    <Bookmark size={16} />
                    <span className={styles.dashboardHeading}>Forms</span>
                  </div>
                  <ChevronRight size={15} className={styles.arrowIcon} />
                </div>
              </div>

              <div className={styles.dashBoardContainer}>
                <div className={styles.optionContainer}>
                  <div className={styles.displayFlex}>
                    <Grid size={16} />
                    <span className={styles.dashboardHeading}>Tables</span>
                  </div>
                  <ChevronRight size={15} className={styles.arrowIcon} />
                </div>
              </div>

              <div className={styles.dashBoardContainer}>
                <div className={styles.optionContainer}>
                  <div className={styles.displayFlex}>
                    <BarChart2 size={16} />
                    <span className={styles.dashboardHeading}>Charts</span>
                  </div>
                  <ChevronRight size={15} className={styles.arrowIcon} />
                </div>
              </div>

              <div className={styles.dashBoardContainer}>
                <div className={styles.optionContainer}>
                  <div className={styles.displayFlex}>
                    <Map size={16} />
                    <span className={styles.dashboardHeading}>Maps</span>
                  </div>
                  <ChevronRight size={15} className={styles.arrowIcon} />
                </div>
              </div>

              <div className={styles.dashBoardContainer}>
                <div className={styles.optionContainer}>
                  <div className={styles.displayFlex}>
                    <Share2 size={16} />
                    <span className={styles.dashboardHeading}>Multi Level</span>
                  </div>
                  <ChevronRight size={15} className={styles.arrowIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
