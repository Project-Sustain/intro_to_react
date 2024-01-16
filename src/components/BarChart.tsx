import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BarChartData {
    name: number; // Letters
    value: number; // Counties
}

interface BarChartsProps {
    data: BarChartData[];
}

export default function BarCharts({ data}: BarChartsProps) {

    return (
        <ResponsiveContainer width='100%' height={350}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
};