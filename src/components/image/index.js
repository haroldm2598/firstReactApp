const user = {
	name: 'Hedy Lamarr',
	imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
	imageSize: 90
};

const user2 = {
	name: 'Katherine Johnson',
	imageUrl: 'https://i.imgur.com/MK3eW3Am.jpg',
	imageSize: 90
};

export function MyImage() {
	return (
		<img
			src={user.imageUrl}
			alt={user.name}
			style={{
				width: user.imageSize,
				height: user.imageSize
			}}
		></img>
	);
}

export function Profile({ person = { name: user2.name }, size }) {
	return (
		<img
			className='avatar'
			src={user2.imageUrl}
			alt={person.name}
			style={{
				width: size,
				height: size
			}}
		></img>
	);
}
