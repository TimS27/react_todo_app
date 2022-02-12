import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default class Example extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const upDown = [];
    const percentages = [{ value: 0, color: "red" }];
    const percentagesForHardBreaks = [];
    var colorChange = true;

    for (let i = 0; i < this.props.data.length; i++) {
      upDown.push(this.props.data[i].up);
    }

    for (let i = 0; i < upDown.length; i++) {
      if (upDown[i] !== upDown[i - 1] && i !== 0) {
        if (colorChange === true) {
          percentages.push({ value: i / upDown.length, color: "red" });
          percentages.push({ value: i / upDown.length, color: "green" });
        } else {
          percentages.push({ value: i / upDown.length, color: "green" });
          percentages.push({ value: i / upDown.length, color: "red" });
        }
        if (colorChange === true) {
          colorChange = false;
        } else {
          colorChange = true;
        }
      }
    }

    for (let i = 0; i < percentages.length; i++) {
      if (i % 2 !== 0) {
        percentagesForHardBreaks.push(percentages[i] - percentages[i - 1]);
      } else {
        percentagesForHardBreaks.push(percentages[i]);
      }
    }

    const breaks = percentages.map((percentage, index) => (
      <stop
        key={index}
        offset={String(String(percentage.value * 100) + "%")}
        stopColor={percentage.color}
      />
    ));

    console.log("UpDown: " + upDown);
    console.log("Percentages: " + percentages);
    console.log(breaks);

    /*
    const CustomTooltip = ({ payload, label }) => {
      return (
        <div className='custom-tooltip'>
          <p className='label'>{`${payload[0].value}`}</p>
        </div>
      );
    };*/

    return (
      <ResponsiveContainer width='100%' height='100%'>
        <AreaChart
          data={this.props.data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id='gradient' x1='0' y1='0' x2='100%' y2='0'>
              <stop offset='0%' stopColor='red' />
              {breaks}
              <stop
                offset='100%'
                stopColor={percentages[percentages.length - 1].color === "green" ? "green" : "red"}
              />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='up' />
          <YAxis />
          <Area
            dot={false}
            activeDot={false}
            type='monotone'
            dataKey='cumulatedCount'
            stroke='url(#gradient)'
            fill='url(#gradient)'
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

/*
<Tooltip content={<CustomTooltip />} />
*/
