import { HomeScreen } from './home/HomeScreen';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import './styles/index.css';

export function App(){
  return (
    <>
        <Navbar/>
        <HomeScreen/>
        <Footer/>
    </>
    );
};