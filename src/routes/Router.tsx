import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from '@/components/Loading';

const TopPage = lazy(() => import('@/pages/Top'));
const ErrorPage = lazy(() => import('@/pages/Error'));

export const Router = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path='/' element={<TopPage />} />
					<Route path='*' element={<ErrorPage />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};
