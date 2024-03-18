import { useState, useEffect } from 'react';
import liff from '@line/liff';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/user';

export type Status = 'un_inited' | 'inited';

// LINEログイン
export const useLine = () => {
	const [status, setStatus] = useState<Status>('un_inited');
	const [loginError, setLoginError] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		if (status === 'inited') return;

		// 外部ブラウザの場合はログインを促す
		if (!liff.isInClient() && !liff.isLoggedIn()) return liff.login({});

		if (liff.isLoggedIn()) {
			Promise.all([liff.getProfile(), liff.getAccessToken()])
				.then(([profile, accessToken]) => {
					dispatch(
						setUser({
							username: profile.displayName,
							isLoggedIn: true,
							image: profile.pictureUrl,
							accessToken: accessToken,
						})
					);
					setStatus('inited');
				})
				.catch((error) =>
					setLoginError(error.message || 'ログインに失敗しました')
				);
		}
	}, [status, dispatch]);

	const login = () => liff?.login({});

	const logout = () => {
		liff?.logout();
		dispatch(
			setUser({
				username: null,
				isLoggedIn: false,
				image: undefined,
				accessToken: null,
			})
		);
	};

	return {
		status,
		loginError,
		login,
		logout,
	};
};
