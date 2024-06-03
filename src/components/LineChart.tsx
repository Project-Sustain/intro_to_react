import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import countyData from '../library/county_data.json';

interface County {
    name: string;
    GISJOIN: string;
}

const lineChartData = countyData.map((county: County) => ({
    name: county.name,
    letterCount: county.name.length
}));

const CountyLettersLineChart: React.FC = () => (
    <ResponsiveContainer width="100%" height={400}>
        <LineChart data={lineChartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="letterCount" stroke="#8884d8" />
        </LineChart>
    </ResponsiveContainer>
);

export default CountyLettersLineChart;
