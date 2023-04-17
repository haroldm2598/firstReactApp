const products = [
	{ title: 'Cabbage', isFruit: false, id: 1 },
	{ title: 'Garlic', isFruit: false, id: 2 },
	{ title: 'Apple', isFruit: true, id: 3 }
];

export function Navbar() {
	const arrObj = products.map((item) => (
		<li key={item.id} style={{ color: item.isFruit ? '#a8dadc' : '#ffb703' }}>
			{item.title}
		</li>
	));

	return <ul>{arrObj}</ul>;
}
