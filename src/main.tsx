import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

import liff from '@line/liff';

liff
	.init({ liffId: import.meta.env.VITE_LIFF_ID })
	.then(() => {
		ReactDOM.render(
			<React.StrictMode>
				<Provider store={store}>
					<App />
				</Provider>
			</React.StrictMode>,
			document.getElementById('root')
		);
	})
	.catch((e) => {
		console.log({ e });
	});
