import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import countyData from '../library/county_data.json';

interface County {
    name: string;
    GISJOIN: string;
}

const letterFrequency = countyData.reduce((acc: Record<number, number>, county: County) => {
    const length = county.name.length;
    acc[length] = (acc[length] || 0) + 1;
    return acc;
}, {});

const histogramData = Object.entries(letterFrequency).map(([length, count]) => ({
    length: parseInt(length, 10),
    count: count as number
}));

const CountyLettersHistogram: React.FC = () => (
    <ResponsiveContainer width="100%" height={400}>
        <BarChart data={histogramData}>
            <XAxis dataKey="length" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
    </ResponsiveContainer>
);

export default CountyLettersHistogram;
