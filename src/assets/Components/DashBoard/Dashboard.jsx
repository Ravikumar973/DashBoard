import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import './Dashboard.css';
import { SlCalender } from "react-icons/sl";
import calender from "../../../assets/calender.jpg"
const stock = [
  { month: "June", BrownRice: 100, BasmathiRice: 100, BlackRice: 100, BombaRice: 100, AuromaticRice: 100 },
  { month: "July", BrownRice: 100, BasmathiRice: 100, BlackRice: 100, BombaRice: 100, AuromaticRice: 100 },
  { month: "August", BrownRice: 100, BasmathiRice: 100, BlackRice: 100, BombaRice: 100, AuromaticRice: 100 }
];

const stockSummary = [
  { type: 'Brown Rice', amount: 100, bagSize: 25 },
  { type: 'Basmathi Rice', amount: 0, status: 'Out of stock', bagSize: 25 },
  { type: 'Black Rice', amount: 20, bagSize: 25 },
  { type: 'Bomba Rice', amount: 80, bagSize: 25 },
  { type: 'Auromatic Rice', amount: 50, bagSize: 25 },
];

const COLORS = ['#4CAF50', '#81C784', '#66BB6A', '#388E3C', '#2E7D32'];
const COLORS1 = ['#704E19', '#AF7B2C', '#2E1F05', '#AF732B', '#402E0B'];

const renderCustomizedLegend = (props) => {
  const { payload } = props;
  return (
    <div className="custom-legend">
      {payload.map((entry, index) => (
        <div key={`item-${index}`} style={{ color: "black" }} className='inner-legend'> 
        <div className="small-legend" style={{backgroundColor : `${COLORS1[index]}` }}></div>
          <p>{entry.value}</p>  <p>20%</p>
        </div>
      ))}
    </div>
  );
};

const Dashboard = () => {
  // Filter data for August
  const augustData = stock.filter(item => item.month === 'August');

  return (
    <div className="dashboard">
      <div className="head">
        <h1></h1>
        <h3>Stock</h3>
        <div className="calender">
        {/* <SlCalender /> */}
          <img src={calender} alt="" />
          <div className="inner-calender">                 August
</div>
        </div>
      </div>
      <div className="stock-summary">
        {stockSummary.map((item, index) => (
          <div key={index} className="stock-card">
            <h3>{item.type}</h3>
            <div className="stock-amount">
              <span>{item.amount}</span>
            </div>
            {item.status === 'Out of stock' && <div className="out-of-stock">Out of stock</div>}
            <p>( {item.bagSize} kg bags )</p>
          </div>
        ))}
      </div>
      <div className="head1"><h3>Graphs</h3></div>
      <div className="graphs-section" >
        <div className="stacked-bar-chart" style={{
              backgroundColor : "white", width : "30%"
              
            }} >
          <h2>Stock</h2>
          <BarChart 
            width={550}
            height={400}
            data={augustData}
            
            layout="vertical"
            barSize={30}
            margin={{ top: 30, right: 40, left: 30, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number"  />
            <YAxis dataKey="month" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="BrownRice" stackId="a" fill="#4CAF50" radius={[10, 0, 0, 10]} />
            <Bar dataKey="BasmathiRice" stackId="a" fill="#81C784" />
            <Bar dataKey="BlackRice" stackId="a" fill="#66BB6A" />
            <Bar dataKey="BombaRice" stackId="a" fill="#388E3C" />
            <Bar dataKey="AuromaticRice" stackId="a" fill="#2E7D32" radius={[0, 10, 10, 0]} />
          </BarChart>

        </div>

        <div className="donut-charts">
          {stock.map((item, index) => (
            <div key={index} className="donut-chart">
              <h2>Sales in {item.month}</h2>
              <PieChart width={200} height={200}> {/* Reduced size */}
                <Pie
                  data={[
                    { name: 'Brown Rice', value: item.BrownRice },
                    { name: 'Basmathi Rice', value: item.BasmathiRice },
                    { name: 'Black Rice', value: item.BlackRice },
                    { name: 'Bomba Rice', value: item.BombaRice },
                    { name: 'Auromatic Rice', value: item.AuromaticRice },
                  ]}
                  cx={100}
                  cy={100}
                  innerRadius={60}
                  outerRadius={90}  
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  labelLine={false}
                  label={false} // Remove labels from segments
                >
                  {[
                    { name: 'Brown Rice', value: item.BrownRice },
                    { name: 'Basmathi Rice', value: item.BasmathiRice },
                    { name: 'Black Rice', value: item.BlackRice },
                    { name: 'Bomba Rice', value: item.BombaRice },
                    { name: 'Auromatic Rice', value: item.AuromaticRice },
                  ].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS1[index % COLORS1.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend
                  content={renderCustomizedLegend}
                  layout="vertical"
                  verticalAlign="bottom"  
                  align="center"
                  
                />
              </PieChart>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
