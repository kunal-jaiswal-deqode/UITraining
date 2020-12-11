import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "../styles.module.scss";

const BarGraph = ({ data }) => {
  return (
    <>
      <div className={styles.heading}>Statistics</div>
      <div className={styles.textContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.statistics}>1,284</div>
          <div className={styles.subHeading}>Total Sales</div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.statistics}>7,841</div>
          <div className={styles.subHeading}>Open Campaign</div>
        </div>
      </div>
      <ResponsiveContainer width="95%" height={300}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 15,
            bottom: 5,
          }}
          barSize={15}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 20, right: 20 }}
          />
          <YAxis />
          <Tooltip />

          <Bar dataKey="Statistics" fill="#43bfe5" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarGraph;
