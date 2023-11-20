import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { incremented, amountAdded } from './features/counter/counter-slice';

function App() {
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	function handleInc() {
		dispatch(incremented());
	}

	function handleAdd() {
		dispatch(amountAdded(3));
	}

	return (
		<>
			<div>
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
			</div>
		</>
	);
}

export default App;
