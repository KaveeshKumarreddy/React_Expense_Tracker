import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {

const datapointValues = props.dataPoints.map(datapoint => datapoint.value);
const maxvalue = Math.max(...datapointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={maxvalue}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
