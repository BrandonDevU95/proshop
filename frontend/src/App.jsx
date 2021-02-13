import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomeScreen from './Screens/HomeScreen';

function App() {
	return (
		<Fragment>
			<Header />
			<main className='py-3'>
				<Container>
					<HomeScreen />
				</Container>
			</main>
			<Footer />
		</Fragment>
	);
}

export default App;
