import React, { useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import styles from "../BarGraph/styles.module.css";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieChartComponent = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const onPieEnter = (data, index) => {
    console.log(data, index);
    setActiveIndex(index);
  };
  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;

    return (
      <g>
        <text x={cx} y={cy} dy={0} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>

        <text x={cx} y={cy} dy={25} textAnchor="middle" fill={fill}>
          {payload.value}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
      </g>
    );
  };
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
        <PieChart>
          <Pie
            activeShape={renderActiveShape}
            data={data}
            innerRadius={90}
            outerRadius={120}
            paddingAngle={5}
            dataKey="value"
            activeIndex={activeIndex}
            fill="#8884d8"
            onMouseEnter={onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};
export default PieChartComponent;
