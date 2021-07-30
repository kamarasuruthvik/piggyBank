import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const CategoryGraph = ({categoryTotal}) => {
    return(
        <BarChart width={500} height={300} data={categoryTotal}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" barSize={30} fill="#8884d8"
        />

      </BarChart>
    );
}

export default CategoryGraph
