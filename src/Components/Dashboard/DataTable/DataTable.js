import React from "react";
import styles from "./styles.module.css";
import cx from "classnames";
import { tableData } from "../constants";

const DataTable = () => {
  return (
    <div className={styles.tableContainer}>
      <label className={styles.heading}>Projects</label>
      <table className={styles.headerTable}></table>
      <table className={styles.contentTable}>
        <th className={cx(styles.header, styles.projectName)}>Project Name</th>
        <th className={cx(styles.header, styles.startDate)}> Start Date</th>
        <th className={cx(styles.header, styles.dueDate)}>Due Date</th>
        <th className={cx(styles.header, styles.team)}>Team</th>
        <th className={cx(styles.header, styles.status)}>Status</th>
        <th className={cx(styles.header, styles.client)}>Client</th>

        <tbody>
          {tableData.map((tableEntry) => (
            <tr key={tableEntry.projectName}>
              <td className={styles.projectName}>{tableEntry.projectName}</td>
              <td className={styles.startDate}>{tableEntry.startDate}</td>
              <td className={styles.dueDate}>{tableEntry.dueDate}</td>
              <td className={styles.team}>{tableEntry.team}</td>
              <td className={styles.status}>{tableEntry.status}</td>
              <td className={styles.client}>{tableEntry.client}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DataTable;
