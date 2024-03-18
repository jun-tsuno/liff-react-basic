import { useLineMessage } from '@/hooks/useLineMessage';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import { FormEvent, useState } from 'react';

const TopPage = () => {
	const [feeling, setFeeling] = useState('');

	const user = useSelector((state: RootState) => state.user);
	const { sendMessages } = useLineMessage();

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (!feeling) return alert('今の気持ちを入力してください');

		const result = await sendMessages([{ type: 'text', text: feeling }]);

		if (result?.success) {
			setFeeling('');
			return alert('メッセージを送信しました');
		} else {
			return alert('メッセージの送信に失敗しました');
		}
	};

	return (
		<>
			<section className='flex flex-col items-center justify-center gap-4 my-4'>
				<h3 className='text-lg font-semibold'>{user?.username}</h3>
				<figure className='w-20 h-20'>
					{user?.image ? (
						<img
							src={user.image}
							alt='プロフィール画像'
							className='w-full h-full rounded-full object-cover'
						/>
					) : (
						<div className='w-full h-full rounded-full bg-gray-400' />
					)}
				</figure>
			</section>
			<section className='w-[90%] mx-auto max-w-[300px] flex flex-col gap-4 items-center mt-10'>
				<h2 className='text-2xl font-semibold text-gray-500'>今の気持ちは？</h2>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col items-center gap-10 w-full'
				>
					<input
						type='text'
						placeholder='サイコー！！'
						value={feeling}
						onChange={(e) => setFeeling(e.target.value)}
						className='bg-slate-200 w-full text-xl py-2 px-4 italic'
					/>
					<button
						type='submit'
						className='bg-emerald-500 font-semibold hover:brightness-90 text-white w-[100px] py-4 rounded-lg text-lg'
					>
						送信する
					</button>
				</form>
			</section>
		</>
	);
};

export default TopPage;
