import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
	return (
		<Fragment>
			<Header />
			<main className='py-3'>
				<Container>
					<h1>React Work...</h1>
				</Container>
			</main>
			<Footer />
		</Fragment>
	);
}

export default App;
