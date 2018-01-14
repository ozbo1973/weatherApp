import _lodash from 'lodash';
import React, { Component } from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-Sparklines';

function average(data) {
  return _.round(_.sum(data) / data.length);
}

const Chart = props => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        avg: {average(props.data)} {props.units}
      </div>
    </div>
  );
};

export default Chart;
