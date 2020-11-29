import React from "react";
import styles from "./styles.module.css";

const imageUrl =
  "https://cdn2.iconfinder.com/data/icons/avatars-2-7/128/1-512.png";
const Profile = ({ name, designation }) => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.imageContainer}>
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
