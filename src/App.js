import { MyButton } from './components/button';
import { MyImage, Profile } from './components/image';
import { Navbar } from './components/listItems';

import './styles/main.scss';

function App() {
	return (
		<>
			<div className='App'>
				<Navbar></Navbar>
				<h1>Hello Welcome to my first react js!</h1>
				<MyImage></MyImage>
				<Profile />
				<Profile
					person={{
						name: 'Katsuko Saruhashi',
						imageId: 'YfeOqp2'
					}}
					size={100}
				/>
				<MyButton></MyButton>
			</div>
		</>
	);
}

export default App;
