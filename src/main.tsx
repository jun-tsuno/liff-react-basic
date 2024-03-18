import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

import liff from '@line/liff';
// import LIFFInspectorPlugin from '@line/liff-inspector';

// liff.use(new LIFFInspectorPlugin());

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

// debug
if (import.meta.env.VITE_NODE_ENV === 'development') {
	if (!window.__vconsoleInstance) {
		import('vconsole').then((vConsole) => {
			window.__vconsoleInstance = new vConsole.default();
			console.log('vconsole inited');
		});
	}
}
