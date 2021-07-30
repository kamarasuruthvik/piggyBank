import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const WeekGraph = ({weekTotal}) => {
    return(
        <BarChart width={500} height={300} data={weekTotal}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" barSize={30} fill="#bc6c25"
        />

      </BarChart>
    );
}

export default WeekGraph
