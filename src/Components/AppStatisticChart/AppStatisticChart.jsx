import React from "react";
import useAppHook from "../../hooks/useAppHook/useAppHook";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useParams } from "react-router";

const AppStatisticChart = () => {
  const { id } = useParams();
  const { apps } = useAppHook();

  const appsdata = apps.map((app) => ({
    id: app.id,
    name: app.title,
    uv: app.ratings,
  }));
  const data = appsdata.find((app) => app.id === Number(id));
  
  const chartData =
    data?.uv.sort((a, b) => parseInt(b.name[0]) - parseInt(a.name[0])) || [];

  return (
    <div className="w-full md:w-11/12 lg:w-4/5 mx-auto mt-6 mb-12 px-4">
      {/* Card Container for better visual separation */}
      <div className="bg-white p-4 md:p-8 rounded-xl shadow-sm border border-slate-100">
        
        {/* Optional Header */}
        <h2 className="text-xl font-bold text-slate-800 mb-6 text-center">
          Rating Distribution: <span className="text-[#FF8811]">{data?.name}</span>
        </h2>

        {/* Responsive Chart Wrapper */}
        <div className="h-[300px] md:h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 10, // Adjusted margins for better fit on small screens
                bottom: 5,
              }}
            >
              {/* Lighter, vertical-only grid for a cleaner look */}
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
              
              <XAxis 
                type="number" 
                dataKey="count" 
                tick={{ fill: '#64748b', fontSize: 12 }}
                axisLine={{ stroke: '#cbd5e1' }}
              />
              
              <YAxis 
                type="category" 
                dataKey="name" 
                width={60}
                tick={{ fill: '#475569', fontWeight: 600, fontSize: 13 }}
                axisLine={false}
              />
              
              <Tooltip 
                cursor={{ fill: '#f8fafc' }}
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  borderRadius: '8px', 
                  border: 'none', 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
                }}
              />
              
              <Legend verticalAlign="top" height={36}/>
              
              <Bar 
                dataKey="count" 
                fill="#FF8811" 
                name={data?.name || "Reviews"} 
                barSize={24} // Slightly thicker bars for modern look
                radius={[0, 6, 6, 0]} // Rounded tips on the right
                activeBar={{ fill: '#e67300' }} // Darker shade on hover
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AppStatisticChart;