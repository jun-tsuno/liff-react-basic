import { useState } from 'react';
import { Status } from './useLine';

interface UseLineInfoProps {
	liff: any | null;
	status: Status;
}

// LINEプロフィールの取得
export const useLineInfo = ({ liff, status }: UseLineInfoProps) => {
	const [displayName, setDisplayName] = useState<string>('');
	const [pictureUrl, setPictureUrl] = useState<string>('');

	if (status !== 'inited')
		return { profile: { displayName, pictureUrl }, version: '' };

	liff
		?.getProfile()
		.then((profile: any) => {
			setDisplayName(profile.displayName);
			setPictureUrl(profile.pictureUrl);
		})
		.catch((err: any) => {
			console.error({ err });
		});

	return {
		profile: { displayName, pictureUrl },
	};
};
