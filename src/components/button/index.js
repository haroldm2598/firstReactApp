import '../../styles/main.scss';
import { useState } from 'react';

const objectArr = {
	objectName: 'testButton'
};

export function MyButton() {
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount(count + 1);
	}

	return (
		<button className='button' onClick={handleClick}>
			{objectArr.objectName}
			{count}
		</button>
	);
}
