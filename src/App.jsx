import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomeScreen } from './home/HomeScreen';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Lifestyle } from './lifestyle/Lifestyle';
import { Outlet } from 'react-router-dom';
import './styles/index.css';

// 1. Crea el componente Layout para agrupar la barra de navegación y el pie de página
function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// 2. Renderiza el componente Layout como la ruta principal
export function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomeScreen />} /> {/* Home screen nested */}
          <Route path='category/Lifestyle' element={<Lifestyle />} />
        </Route>
      </Routes>
    </>
  );
}