import React from "react";
import styles from "./styles.module.scss";
import cx from "classnames";

const imageUrl =
  "https://cdn2.iconfinder.com/data/icons/avatars-2-7/128/1-512.png";
const Profile = ({ name, designation, isActive }) => {
  return (
    <div
      className={cx(
        { [styles.profileContainer]: isActive },
        { [styles.profileActive]: isActive },
        { [styles.profileContainer]: !isActive }
      )}
    >
      <div className={styles.imageContainer}>
        {isActive && <span className={styles.isActiveDot} />}
        <img src={imageUrl} alt="ProfileImage" className={styles.image} />
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.name}>{name}</p>
        <p className={styles.designation}>{designation}</p>
      </div>
    </div>
  );
};

export default Profile;
