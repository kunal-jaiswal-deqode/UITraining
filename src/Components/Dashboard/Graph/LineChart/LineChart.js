import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "../styles.module.scss";
import { lineChartData } from "../../constants";

const LineChartComponent = () => {
  return (
    <>
      <div className={styles.heading}>Income Amounts</div>
      <div className={styles.textContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.statistics}>2,845</div>
          <div className={styles.subHeading}>Total Sales</div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.statistics}>6,487</div>
          <div className={styles.subHeading}>Open Sales</div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.statistics}>201</div>
          <div className={styles.subHeading}>Daily Sales</div>
        </div>
      </div>
      <ResponsiveContainer width="95%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={lineChartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineChartComponent;
