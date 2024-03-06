import { useState } from 'react'
import '../styles/index.css'

export function Navbar(){

  return (
    <header>
        <h3>Alecs</h3>
        <nav>
            <a href="/#">Home</a>
            <a href="/#">Portfolio</a>
            <a href="/#">About Me</a>
            <a href="/#">Chetos</a>
            <button>
                Botonazo
            </button>
        </nav>
        <button>
            Botonsito
        </button>
    </header>
  )
}