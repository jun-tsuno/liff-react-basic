import './App.css';
import { Router } from '@/routes/Router';
import { useLine } from './hooks/useLine';

function App() {
	useLine();

	return (
		<div>
			<Router />
		</div>
	);
}

export default App;
