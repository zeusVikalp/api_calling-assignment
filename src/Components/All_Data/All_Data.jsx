import React, { useEffect, useState } from 'react';
import './All_data.css'
import MyChart from '../Chart/Chart';

export const All_Data = () => {
	const [data, setData] = useState();
	const [city, setCity] = useState(null);

	const handleChange = (e) => {
		setCity(null);
		fetchCity(e.target.value);
	};
	const fetchData = () => {
		fetch('https://covid-19-statistics.p.rapidapi.com/regions', {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key':
					'54ddc79284msh8ec7d408f87d307p1d1156jsn4b7f9972b58f',
				'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com',
			},
		})
			.then((response) => response.json())
			.then((response) => setData(response.data))
			.catch((err) => console.log(err));
	};

	const fetchCity = (iso) => {
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key':
					'54ddc79284msh8ec7d408f87d307p1d1156jsn4b7f9972b58f',
				'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com',
			},
		};

		fetch(
			`https://covid-19-statistics.p.rapidapi.com/provinces?iso=${iso}`,
			options,
		)
			.then((response) => response.json())
			.then((response) => setCity(response.data))
			.catch((err) => console.error(err));
	};

	useEffect(() => {
		fetchData();
		fetchCity();
	}, []);

	return (
		<div>
			<br />
			<label for='cars'>Select the country</label>
			
			<select name='select the city'  onChange={handleChange}>
				<option className='opt' value=''>Select the country</option>
				{data &&
					data.length !== 0 &&
					data?.map((item) => (
						<option value={item.iso}>{item.name}</option>
					))}
			</select>
            <br/><br/>
			<div>
				<label for='cars'>Select the city</label>
				<select name='select the city' id=''>
					<option className='opt' value=''>Select the city</option>
					{city &&
						city.length !== 0 &&
						city?.map((item) => (
							<option value={item.iso}>{item.province}</option>
						))}
				</select>
			</div>

			{city && city.length !== 0 && (
				<MyChart country={data} city={city} />
			)}
		</div>
	);
};
