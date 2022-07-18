import React from 'react';
import { Chart } from 'react-charts';
import './Chart.css'

function MyChart({ country, city }) {
	const newData = [];
	city.forEach((city) => newData.push([city.lat, city.long]));
	const data = React.useMemo(
		() => [
			{
				label: 'Series 1',
				data: newData,
			},
		],
		[],
	);

	const axes = React.useMemo(
		() => [
			{ primary: true, type: 'linear', position: 'bottom' },
			{ type: 'linear', position: 'left' },
		],
		[],
	);

	const lineChart = (
		// A react-chart hyper-responsively and continuously fills the available
		// space of its parent element automatically
		<div className='chart_div'
			style={{
				width: '900px',
				height: '700px',
				color: 'white',
				
 
			}
			
		
		}
		>
			<Chart className='main_chart' data={data} axes={axes} />
		</div>
	);

	return lineChart;
}

export default MyChart;
