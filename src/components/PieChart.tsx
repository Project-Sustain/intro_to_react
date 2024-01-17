import { ResponsiveContainer, PieChart, Pie, Cell, Legend} from 'recharts';


interface PieChartData {
    name: string;
    value: number;
}

interface PieChartsProps {
    data: PieChartData[];
    stateName: string;
}


export default function PieCharts({ data}: PieChartsProps) {


    return (
        <ResponsiveContainer width='100%' height={400}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    fill="#8884d8"
                    label
                    labelLine={false}
                >
                    <Cell key="cell-0" fill="#0088FE" /> {/* Blue for the first slice */}
                    <Cell key="cell-1" fill="#00C49F" /> {/* Green for the second slice */}
                </Pie>
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
}