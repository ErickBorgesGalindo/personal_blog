import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { RiLockPasswordLine } from "react-icons/ri";
import { MdMailOutline } from "react-icons/md";


import '../styles/admin.css';

export function Admin() {
    const [InputUser, setInputUser] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState({ // Estado para manejar el error
        email: false,
        password: false
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = users.find((u) => u.email === InputUser.email);

        if (!user) {
            setError({ email: true, password: true });
            console.log('Correo electrónico no encontrado');
            return;
        }

        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: InputUser.email, password: InputUser.password }),
        });

        const data = await response.json();

        if (data.success) {
            console.log('¡Inicio de sesión exitoso!');
            navigate('admin/dashboard');
            // Handle successful login (e.g., redirect to protected area)
        } else {
            setError({ email: true, password: true });
            console.log('Contraseña incorrecta');
        }
    };

    const handleChange = e => {
        setError({ email: false, password: false });
        setInputUser({ ...InputUser, [e.target.name]: e.target.value });
    };

    // -------- Extraer los usuarios --------
    const [users, setUsers] = useState([]);

    const loadUsers = async () => {
        const response = await fetch('http://localhost:3000/users');
        const data = await response.json();
        setUsers(data);
        // console.log(data)
    }

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <div className='adm-container'>
            <div className="bg-image">
                <img src='../src/assets/images/news.jpg' />
            </div>
            <div className='adm-main-section'>
                <div className='adm-title'>
                    <h2>Welcome Back!</h2>
                    <span>Please login to the blog with your mail and password</span>
                </div>
                <div className='adm-form'>
                    <form>
                        <div className={`input-container ${error.email ? 'error' : ''}`}>
                            <i><MdMailOutline /></i>
                            <input type='email' id='email' name='email' onChange={handleChange} placeholder='Enter your email address' required />
                        </div>

                        <div className={`input-container ${error.password ? 'error' : ''}`}>
                            <i><RiLockPasswordLine /></i>
                            <input type='password' id='password' name='password' onChange={handleChange} placeholder='Enter your password' required />
                        </div>

                        {error.email ? <p>Información incorrecta</p> : null}

                        <div className="options">
                            <a href="#">¿Ha olvidado su contraseña?</a>
                        </div>

                        <div className="btn">
                            <button
                                className="btn-submit"
                                type="submit"
                                onClick={handleSubmit}
                            >Iniciar sesión</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};