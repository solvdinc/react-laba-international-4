import Header from './components/Header';

const MainLayout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<footer></footer>
		</>
	);
};

export default MainLayout;
