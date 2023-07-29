import "./Chart.css";
import ChartBar from "./ChartBar";

//render all chartbars
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  let totalValues = 0;
  for (let dataPoint of props.dataPoints) {
    totalValues += +dataPoint.value;
  }
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          // we need value , max
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value} // how much the total amount in this month
            maxValue={totalValues} //how much the total amount in this year
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
