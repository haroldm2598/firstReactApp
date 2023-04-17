const user = {
	name: 'Hedy Lamarr',
	imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
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
