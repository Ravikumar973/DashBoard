import React, { useState } from 'react';
import "./Table.css";
import stock from "../../../stock";
import sales from "../../../sales";

const Table = () => {
    const [selectedRowIndex, setSelectedRowIndex] = useState(null);
    const [selectedRowIndex1, setSelectedRowIndex1] = useState(null);

    const handleRowClick = (index) => {
        setSelectedRowIndex(index);
    };

    const handleRowClick1 = (index) => {
        setSelectedRowIndex1(index);
    };

    return (
        <div className="Table">
            <div className="stock">
                <h2>Stock</h2>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Brown Rice</th>
                        <th>Basmathi Rice</th>
                        <th>Black Rice</th>
                        <th>Bomba Rice</th>
                        <th>Automatic Rice</th>
                    </tr>
                </thead>
                <tbody>
                    {stock.map((item, index) => (
                        <tr
                            key={index}
                            onClick={() => handleRowClick(index)}
                            style={{
                                backgroundColor: selectedRowIndex === index ? '#D5D5D5' : 'transparent',
                            }}
                        >
                            <td>{item.month}</td>
                            <td>{item.BrownRice}</td>
                            <td>{item.BasmathiRice}</td>
                            <td>{item.BlackRice}</td>
                            <td>{item.BombaRice}</td>
                            <td>{item.AuromaticRice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="stock">
                <h2>Sales</h2>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Brown Rice</th>
                        <th>Basmathi Rice</th>
                        <th>Black Rice</th>
                        <th>Bomba Rice</th>
                        <th>Automatic Rice</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map((item, index) => (
                        <tr
                            key={index}
                            onClick={() => handleRowClick1(index)}
                            style={{
                                backgroundColor: selectedRowIndex1 === index ? '#D5D5D5' : 'transparent',
                            }}
                        >
                            <td>{item.month}</td>
                            <td>{item.BrownRice}</td>
                            <td>{item.BasmathiRice}</td>
                            <td>{item.BlackRice}</td>
                            <td>{item.BombaRice}</td>
                            <td>{item.AuromaticRice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
