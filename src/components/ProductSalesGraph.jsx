import React from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	Label
} from 'recharts';

const ProductSalesGraph = ({ salesData }) => {
	const monthNames = [
		'JAN',
		'FEB',
		'MAR',
		'APR',
		'MAY',
		'JUN',
		'JUL',
		'AUG',
		'SEP',
		'OCT',
		'NOV',
		'DEC'
	];
	const groupByMonth = {};
	monthNames.forEach(month => {
		groupByMonth[month] = [];
	});

	salesData.forEach(data => {
		const date = new Date(data.weekEnding);
		groupByMonth[monthNames[date.getUTCMonth()]].push({
			retailSales: data.retailSales,
			wholesaleSales: data.wholesaleSales
		});
	});

	const data = Object.keys(groupByMonth).map(month => {
		return {
			month,
			retailSales: groupByMonth[month].reduce(
				(accu, curr) => accu + curr.retailSales,
				0
			),
			wholesaleSales: groupByMonth[month].reduce(
				(accu, curr) => accu + curr.wholesaleSales,
				0
			)
		};
	});

	return (
		<div
			className="product-graph"
			style={{ background: '#fff', padding: '3rem' }}>
			<LineChart
				margins={{ left: 100, right: 100, top: 50, bottom: 50 }}
				width={700}
				height={500}
				data={data}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="month">
					<Label value="month" offset={0} position="insideBottom" />
				</XAxis>
				<YAxis>
					<Label value="sales" angle={-90} position="insideLeft" />
				</YAxis>
				<Tooltip />
				<Legend verticalAlign="top" />
				<Line
					type="monotone"
					dataKey="retailSales"
					stroke="#8884d8"
					activeDot={{ r: 8 }}
				/>
				<Line
					type="monotone"
					dataKey="wholesaleSales"
					stroke="#82ca9d"
				/>
			</LineChart>
		</div>
	);
};

export default ProductSalesGraph;
