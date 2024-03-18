import { RootState } from '@/store';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import liff from '@line/liff';
import { getRandomElement } from '@/utils/get-random-item';
import { PACKAGE_ID, STAMP_IDS } from '@/utils/constants';
import { SendMessagesParams } from '@liff/send-messages/lib';

type StickerMessage = {
	type: 'sticker';
	packageId: string;
	stickerId: string;
};

export const useLineMessage = () => {
	const user = useSelector((state: RootState) => state.user);

	const sendMessages = useCallback(
		async (messages: SendMessagesParams) => {
			if (!user.isLoggedIn) return;

			try {
				const stickerId = getRandomElement(STAMP_IDS) || STAMP_IDS[0];
				const stickerMessage: StickerMessage = {
					type: 'sticker',
					packageId: PACKAGE_ID,
					stickerId,
				};

				await liff.sendMessages([...messages, stickerMessage]);
				return { success: 'メッセージを送信しました' };
			} catch (error) {
				console.log({ error });
				return { error };
			}
		},
		[user]
	);

	return { sendMessages };
};
