import React, { useEffect, useState } from 'react';
// import {useParams} from 'react-router-dom'
// const axios = require("axios");

export const All_Data = () => {
	// const {username} = useParams()
	const [data, setData] = useState();
	const [iso, setIso] = useState('');

	const handleChange = (e) => {
		// setIso(e.target.value);
		// fetchCity();
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

	const fetchCity = () => {
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
			.then((response) => setIso(response.data))
			.catch((err) => console.error(err));
	};

	useEffect(() => {
		fetchData();
    fetchCity();
    
	}, []);


	console.log(iso);
	return (
		<div>
			<button onClick={fetchData}>GetData</button>
			<br />
			<label for='cars'>select the country</label>
			<select name='select the city' id='' onChange={handleChange}>
				<option value=''>Select the country</option>
				{data &&
					data.length !== 0 &&
					data?.map((item) => (
						<option value={item.iso}>{item.name}</option>
					))}
			</select>

      <div>
        <label htmlFor="state">States</label>
        <div>
          {iso && iso.length!==0 && iso?.map((state) => (<li>{iso.province}</li>)) }
        </div>
      </div>
		</div>
	);
};