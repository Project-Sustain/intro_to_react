import { ResponsiveContainer, PieChart, Pie } from 'recharts';


const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

export default function ExampleLineChart() {

    return (
        <ResponsiveContainer width='100%' height={350}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                />
            </PieChart>
        </ResponsiveContainer>
    );
}
