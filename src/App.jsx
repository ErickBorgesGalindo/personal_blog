import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomeScreen } from './home/HomeScreen';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Lifestyle } from './lifestyle/Lifestyle';
import { Courses } from './courses/Courses';
import { Outlet } from 'react-router-dom';
import './styles/index.css';
import { TechNews } from './technews/TechNews';
import { Admin } from './admin/Admin';
import { Dashboard } from './admin/Dashboard';

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

function AdminLayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
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
          <Route path='category/Courses' element={<Courses />} />
          <Route path='category/TechNews' element={<TechNews />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path='admin/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}