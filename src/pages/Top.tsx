import { RootState } from '@/store';
import { useSelector } from 'react-redux';

const TopPage = () => {
	const user = useSelector((state: RootState) => state.user);

	return (
		<>
			<section className='flex items-center justify-center gap-4 my-4'>
				<figure className='w-10 h-10'>
					{!user?.image ? (
						<img
							src={user.image}
							alt='プロフィール画像'
							className='w-full h-full rounded-full object-cover'
						/>
					) : (
						<div className='w-full h-full rounded-full bg-gray-400' />
					)}
				</figure>
				<h3 className='text-lg font-semibold'>{user?.username}</h3>
			</section>
		</>
	);
};

export default TopPage;
