import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import countyData from '../library/county_data.json';

interface County {
    name: string;
    GISJOIN: string;
}

const classifyCounties = (counties: County[]) => {
    let vowelCount = 0;
    let consonantCount = 0;
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    
    counties.forEach(county => {
        if (vowels.includes(county.name[0].toUpperCase())) {
            vowelCount++;
        } else {
            consonantCount++;
        }
    });

    return [
        { name: 'Vowels', value: vowelCount },
        { name: 'Consonants', value: consonantCount }
    ];
};

const pieData = classifyCounties(countyData);

const COLORS = ['#0088FE', '#00C49F'];

const VowelConsonantPieChart: React.FC = () => (
    <ResponsiveContainer width="100%" height={400}>
        <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150}>
                {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    </ResponsiveContainer>
);

export default VowelConsonantPieChart;
