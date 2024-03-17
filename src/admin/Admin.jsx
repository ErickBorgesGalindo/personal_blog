import React from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdMailOutline } from "react-icons/md";


import '../styles/admin.css';

export function Admin() {
    return (
        <div className='adm-container'>
            <div className="bg-image">
                <img src='../src/assets/images/bg-image.png' />
            </div>
            <div className='adm-main-section'>
                <div className='adm-title'>
                    <h2>Welcome Back!</h2>
                    <span>Please login to the blog with your mail and password</span>
                </div>
                <div className='adm-form'>
                    <form>
                        <div className="mail">
                            <i><MdMailOutline /></i>
                            <input type='email' id='email' name='email' placeholder='Enter your email address' required />
                        </div>

                        <div className="pass">
                            <i><RiLockPasswordLine /></i>
                            <input type='password' id='password' name='password' placeholder='Enter your password' required />
                        </div>

                        <div className="options">
                            <a href="#">¿Ha olvidado su contraseña?</a>
                        </div>

                        <div className="btn">
                            <button className="btn-submit" type="submit">Iniciar sesión</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};