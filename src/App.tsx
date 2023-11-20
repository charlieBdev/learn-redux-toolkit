import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { incremented, amountAdded } from './features/counter/counter-slice';
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice';
import { useState } from 'react';

function App() {
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	function handleInc() {
		dispatch(incremented());
	}

	function handleAdd() {
		dispatch(amountAdded(3));
	}

	const [numDogs, setNumDogs] = useState(10);
	const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

	return (
		<>
			{/* <div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<button onClick={handleInc}>Add 1</button>
				<button onClick={handleAdd}>Add 3</button>
				<p>count is {count}</p>
			</div> */}

			<div>
				<h1>Dogs API - Woof!</h1>

				<div>
					<p>Dogs to fetch:</p>
					<select
						value={numDogs}
						onChange={(e) => setNumDogs(Number(e.target.value))}
					>
						<option value='5'>5</option>
						<option value='10'>10</option>
						<option value='15'>15</option>
						<option value='20'>20</option>
					</select>
				</div>

				<p>Number of dogs fetched: {data.length}</p>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Picture</th>
						</tr>
					</thead>
					<tbody>
						{data.map((breed) => (
							<tr key={breed.id}>
								<td>{breed.name}</td>
								<td>
									<img src={breed.image.url} alt={breed.name} height={250} />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default App;
