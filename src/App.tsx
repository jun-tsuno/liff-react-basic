import './App.css';
import { Router } from '@/routes/Router';
import { useLine } from './hooks/useLine';
import liff from '@line/liff';
import BrowserErrorPage from './pages/BrowserError';

function App() {
	useLine();

	if (!liff.isInClient()) {
		return <BrowserErrorPage />;
	}

	return (
		<div>
			<Router />
		</div>
	);
}

export default App;
