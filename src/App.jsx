import { HomeScreen } from './home/HomeScreen';
import { Navbar } from './components/Navbar';
import './styles/index.css';

export function App(){
  return (
    <>
        <Navbar/>
        <HomeScreen/>
    </>
    );
};